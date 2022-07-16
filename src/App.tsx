import Editor from "@/Editor";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/theme";

/**
 * App component
 */
const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <div>
                <Editor />
            </div>
        </ThemeProvider>
    );
};

export default App;
