import { ButtonProps } from "./";
import styled, { css } from "styled-components";
import { WithDefaultTheme } from "@/types";

import * as StyledIcon from "@/components/shared/Icon/styled";
import * as StyledText from "@/components/shared/Text/styled";

/**
 * Styles for Button component
 */

export const Wrapper = styled.button<StyledButtonProps>`
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    justify-content: center;
    height: 40px;
    padding: 12px 20px;
    border-radius: 4px;
    display: flex;
    cursor: pointer;
    align-items: center;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        transform: scale(0.95);
    }

    & ${StyledIcon.Wrapper} {
        max-width: 24px;
        max-height: 24px;
        margin-left: -6px;
        margin-right: ${({ value }) => (value ? "8px" : "0px")};

        ${(props) => parseIconStyleVariant(props)}
    }

    ${(props) => parseStyleVariant(props)}
`;

export const Value = styled(StyledText.Wrapper)`
    font-weight: 600;
`;

const parseStyleVariant = ({ variant, theme }: StyledButtonProps & WithDefaultTheme) => {
    switch (variant) {
        case "primary": {
            return css`
                color: ${theme.color.white};
                background: ${theme.color.primary};
            `;
        }
        case "secondary": {
            return css`
                color: ${theme.color.primary};
                background: ${theme.color.grey._2};
                border-color: ${theme.color.grey._3};
            `;
        }
    }
};

const parseIconStyleVariant = ({ variant, theme }: StyledButtonProps & WithDefaultTheme) => {
    switch (variant) {
        case "primary": {
            return css`
                fill: ${theme.color.white};
            `;
        }
        case "secondary": {
            return css`
                fill: ${theme.color.primary};
            `;
        }
    }
};

type StyledButtonProps = Pick<ButtonProps, "variant" | "value">;
