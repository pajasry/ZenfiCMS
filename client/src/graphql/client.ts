import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getAuthToken } from "@/utils";

const httpLink = createHttpLink({
    uri: `${import.meta.env.VITE_SERVER}/graphql`,
});

const authLink = setContext((_, { headers }) => {
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
});
