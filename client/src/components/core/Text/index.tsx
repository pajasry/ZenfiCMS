import { ForwardedRef, forwardRef } from "react";

import * as Styled from "./styled";

/**
 * Text component
 */
// eslint-disable-next-line react/display-name
export const Text = forwardRef((props: TextProps, ref: ForwardedRef<HTMLParagraphElement>) => {
    return (
        <Styled.Wrapper {...props} ref={ref}>
            {props.value}
        </Styled.Wrapper>
    );
});

export interface TextProps {
    value: string | undefined;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p" | "a";
    size?: "headline" | "bigger-title" | "title" | "body" | "caption";
    weight?: 300 | 400 | 500 | 600 | 700;
}
