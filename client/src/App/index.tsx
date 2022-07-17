import Editor from "@/Editor";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/theme";
import * as Styled from "./styled";

/**
 * App component
 */
const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Styled.Wrapper>
                <Styled.Global />
                <Editor />
            </Styled.Wrapper>
        </ThemeProvider>
    );
};

export default App;
