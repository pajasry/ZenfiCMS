import { ButtonProps } from "./";
import styled, { css } from "styled-components";
import { WithDefaultTheme } from "@/types";

import { StyledIcon } from "@/components/shared/Icon/styled";
import { StyledText } from "@/components/shared/Text/styled";

/**
 * Styles for Button component
 */

export const StyledButton = styled.button<StyledButtonProps>`
    border: none;
    height: 40px;
    padding: 10px 20px;
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
        max-width: 20px;
        max-height: 20px;
        margin-right: 10px;
        margin-left: -6px;
        fill: ${({ theme }) => theme.color.white};
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
    }
};

export const StyledButtonValue = styled(StyledText)`
    font-weight: 600;
`;

type StyledButtonProps = Pick<ButtonProps, "variant">;
