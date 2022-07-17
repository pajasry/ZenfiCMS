import styled, { css } from "styled-components";
import { TextProps } from "@/components/core";

export const Wrapper = styled.span<StyledTextProps>`
    font-weight: ${({ weight }) => weight};
    font-family: ${({ theme }) => theme.fontFamily.manrope};

    ${(props) => parseSizeVariant(props)}
`;

const parseSizeVariant = (props: StyledTextProps) => {
    switch (props.size) {
        case "headline": {
            return css`
                font-size: 36px;
                line-height: 48px;
            `;
        }
        case "bigger-title": {
            return css`
                font-size: 18px;
                line-height: 24px;
            `;
        }
        case "title": {
            return css`
                font-size: 16px;
                line-height: 22px;
            `;
        }
        case "body": {
            return css`
                font-size: 14px;
                line-height: 20px;
            `;
        }
        case "caption": {
            return css`
                font-size: 12px;
                line-height: 18px;
            `;
        }
    }
};

type StyledTextProps = Pick<TextProps, "size" | "weight">;
