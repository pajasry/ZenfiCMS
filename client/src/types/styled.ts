import { DefaultTheme } from "styled-components";

export interface WithDefaultTheme {
    theme: DefaultTheme;
}

export type VariantType = "primary" | "secondary" | "info" | "warning" | "danger" | "success";
