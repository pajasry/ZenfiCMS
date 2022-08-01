import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getAuthToken } from "@/utils";

const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_SERVER}/graphql`,
});

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

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    ssrMode: typeof window === "undefined",
    connectToDevTools: true,
});
