import Editor from "@/Editor";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/theme";
import { GlobalAppStyle, StyledApp } from "./styled";

/**
 * App component
 */
const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <StyledApp>
                <GlobalAppStyle />
                <Editor />
            </StyledApp>
        </ThemeProvider>
    );
};

export default App;
