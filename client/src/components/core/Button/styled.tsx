import { rgba } from "polished";
import styled, { css } from "styled-components";

import * as StyledIcon from "@/components/core/Icon/styled";
import { parseColorVariant } from "@/utils";

import { ButtonProps } from "./";

export const Wrapper = styled.button<StyledButtonProps>`
    color: #fff;
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
    outline: 2px solid ${(props) => rgba(parseColorVariant(props), 0.1)};

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

type StyledButtonProps = Pick<ButtonProps, "variant" | "value" | "outline">;
