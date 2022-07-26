import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: `${process.env.SERVER}/graphql`,
    cache: new InMemoryCache(),
});
