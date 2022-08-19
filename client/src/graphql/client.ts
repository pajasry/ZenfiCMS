import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import apolloLogger from "apollo-link-logger";
import { getAuthToken } from "@/utils";
import { createUploadLink } from "apollo-upload-client";

const uploadLink = createUploadLink({
    uri: `${process.env.NEXT_PUBLIC_SERVER}/graphql`,
});

const loggerLink = ApolloLink.from([apolloLogger, uploadLink]);

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
