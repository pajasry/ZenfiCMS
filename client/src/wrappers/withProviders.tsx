import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

import { client } from "@/graphql/client";
import { store } from "@/redux";
import { defaultTheme } from "@/theme";

/**
 * With providers wrapper
 */
export const withProviders = (Component: (props: any) => JSX.Element) =>
    function C(props: any) {
        return (
            <Provider store={store}>
                <ApolloProvider client={client}>
                    <ThemeProvider theme={defaultTheme}>
                        <Component {...props} />
                    </ThemeProvider>
                </ApolloProvider>
                <ToastContainer />
            </Provider>
        );
    };
