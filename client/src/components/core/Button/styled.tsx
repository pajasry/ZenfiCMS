import { rgba } from "polished";
import styled, { css } from "styled-components";

import * as StyledIcon from "@/components/core/Icon/styled";
import { parseColorVariant } from "@/utils";

import { ButtonProps } from "./";

export const Wrapper = styled.button<StyledButtonProps>`
    color: #fff;
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    justify-content: center;
    height: 40px;
    padding: 12px 20px;
    border-radius: 4px;
    cursor: pointer;
    align-items: center;
    background: ${(props) => parseColorVariant(props)};
    display: ${(props) => (props.isHidden ? "none" : "flex")};

    ${(props) =>
        props.outline &&
        css`
            background: none;
            border-color: ${parseColorVariant(props)};
            color: ${parseColorVariant(props)};
        `}

    &:hover {
        box-shadow: 0 2px 15px ${(props) => rgba(parseColorVariant(props), 0.3)};
    }

    &:active {
        transform: scale(0.98);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        box-shadow: none;
    }

    &:disabled:active {
        transform: none;
    }

    & ${StyledIcon.Wrapper} {
        max-width: 22px;
        max-height: 22px;
        margin-left: -6px;
        margin-right: ${({ value }) => (value ? "8px" : "0px")};
        fill: ${(props) => (props.outline ? parseColorVariant(props) : "#fff")};
    }
`;

type StyledButtonProps = Pick<
    ButtonProps,
    "variant" | "value" | "outline" | "isHidden"
>;
