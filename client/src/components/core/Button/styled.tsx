import { ButtonProps } from "./";
import styled, { css } from "styled-components";
import { WithDefaultTheme } from "@/types";
import { rgba } from "polished";

import * as StyledIcon from "@/components/core/Icon/styled";

export const Wrapper = styled.button<StyledButtonProps>`
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    justify-content: center;
    height: 40px;
    padding: 12px 20px;
    border-radius: 4px;
    display: flex;
    cursor: pointer;
    align-items: center;
    background: ${(props) => parseColorVariant(props)};
    color: #fff;

    ${(props) =>
        props.outline &&
        css`
            background: none;
            border-color: ${parseColorVariant(props)};
            color: ${parseColorVariant(props)};
        `}

    &:hover {
        box-shadow: 0 2px 10px ${(props) => rgba(parseColorVariant(props), 0.3)};
    }

    &:active {
        transform: scale(0.95);
    }

    & ${StyledIcon.Wrapper} {
        max-width: 22px;
        max-height: 22px;
        margin-left: -6px;
        margin-right: ${({ value }) => (value ? "8px" : "0px")};
        fill: ${(props) => (props.outline ? parseColorVariant(props) : "#fff")};
    }
`;

const parseColorVariant = (props: StyledButtonProps & WithDefaultTheme) => {
    return props.theme.color[props.variant || "primary"];
};

type StyledButtonProps = Pick<ButtonProps, "variant" | "value" | "outline">;
