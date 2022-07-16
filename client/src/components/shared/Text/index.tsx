import { createElement } from "react";
import { StyledText } from "@/components/shared/Text/styled";

/**
 * Text component
 */
export const Text = ({ value, as = "p", size = "body", weight = "regular" }: TextProps) => {
    return createElement(
        as,
        {},
        <StyledText size={size} weight={weight}>
            {value}
        </StyledText>
    );
};

export interface TextProps {
    value: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
    size?: "headline" | "bigger-title" | "title" | "body" | "caption";
    weight?: "light" | "regular" | "medium" | "semi" | "bold";
}
