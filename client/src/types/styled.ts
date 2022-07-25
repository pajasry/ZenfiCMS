import { DefaultTheme } from "styled-components";

export interface WithDefaultTheme {
    theme: DefaultTheme;
}

export type Variant = "primary" | "secondary" | "info" | "warning" | "danger" | "success";
