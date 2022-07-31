import { createElement } from "react";
import * as Styled from "./styled";

/**
 * Text component
 */
export const Text = ({ value, as = "p", size = "body", weight = 400 }: TextProps) => {
    return createElement(
        as,
        {},
        <Styled.Wrapper size={size} weight={weight}>
            {value}
        </Styled.Wrapper>
    );
};

export interface TextProps {
    value: string | undefined;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
    size?: "headline" | "bigger-title" | "title" | "body" | "caption";
    weight?: 300 | 400 | 500 | 600 | 700;
}
