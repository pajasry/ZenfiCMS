import {
    ApolloClient,
    ApolloLink,
    createHttpLink,
    InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import apolloLogger from "apollo-link-logger";
import { getAuthToken } from "@/utils";
import { onError } from "@apollo/client/link/error";
import { toast } from "react-toastify";
import * as _ from "lodash";

const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_SERVER}/graphql`,
});

const errorLink = onError((error) => {
    _.forEach(error.response?.errors, (err) => toast.error(err.message));
});

const loggerLink = ApolloLink.from([apolloLogger, errorLink, httpLink]);

const authLink = setContext((_, { headers }) => {
    if (typeof window === "undefined") return {};

    const token = getAuthToken();

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

//TODO TURN ON CACHE

export const client = new ApolloClient({
    link: authLink.concat(loggerLink),
    cache: new InMemoryCache(),
    ssrMode: typeof window === "undefined",
    connectToDevTools: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: "cache-and-network",
            errorPolicy: "ignore",
        },
        query: {
            fetchPolicy: "network-only",
            errorPolicy: "all",
        },
        mutate: {
            errorPolicy: "all",
        },
    },
});
