import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            primary: string;
            black: string;
            white: string;
        };
        fontFamily: {
            manrope: string;
        };
    }
}
