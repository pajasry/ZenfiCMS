import { ThemeProvider } from "styled-components";
import { Router } from "@/components/routing";
import { defaultTheme } from "@/theme";
import * as Styled from "./styled";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/graphql/client";

/**
 * App component
 */
export const App = () => {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={defaultTheme}>
                <Styled.Wrapper>
                    <Styled.Global />
                    <Router />
                </Styled.Wrapper>
            </ThemeProvider>
        </ApolloProvider>
    );
};
