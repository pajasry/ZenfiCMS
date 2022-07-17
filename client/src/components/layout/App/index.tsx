import { ThemeProvider } from "styled-components";
import { Router } from "@/components/routing";
import { defaultTheme } from "@/theme";
import * as Styled from "./styled";

/**
 * App component
 */
export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Styled.Wrapper>
                <Styled.Global />
                <Router />
            </Styled.Wrapper>
        </ThemeProvider>
    );
};
