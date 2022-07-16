import { ButtonProps } from "./";
import styled, { css } from "styled-components";
import { WithDefaultTheme } from "@/types";

import { StyledIcon } from "@/components/shared/Icon/styled";
import { StyledText } from "@/components/shared/Text/styled";

/**
 * Styles for Button component
 */

export const StyledButton = styled.button<StyledButtonProps>`
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

    & ${StyledIcon} {
        max-width: 24px;
        max-height: 24px;
        margin-left: -6px;
        margin-right: ${({ value }) => (value ? "8px" : "0px")};

        ${(props) => parseIconStyleVariant(props)}
    }

    ${(props) => parseStyleVariant(props)}
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

export const StyledButtonValue = styled(StyledText)`
    font-weight: 600;
`;

type StyledButtonProps = Pick<ButtonProps, "variant" | "value">;
