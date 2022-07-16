import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            primary: string;
            black: string;
            white: string;
            grey: {
                _1: string;
                _2: string;
                _3: string;
            };
        };
        fontFamily: {
            manrope: string;
        };
    }
}
