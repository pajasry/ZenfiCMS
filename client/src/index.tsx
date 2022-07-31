import "react-toastify/dist/ReactToastify.css";

import ReactDOM from "react-dom/client";
import { App } from "@/components/layout";
import { store } from "@/redux";
import { client } from "@/graphql/client";
import { defaultTheme } from "@/theme";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <ThemeProvider theme={defaultTheme}>
                <App />
            </ThemeProvider>
        </ApolloProvider>
    </Provider>
);
