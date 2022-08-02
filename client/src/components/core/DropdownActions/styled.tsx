import { rgba } from "polished";
import styled from "styled-components";

import { VariantType } from "@/types";
import { parseColorVariant } from "@/utils";

export const Wrapper = styled.div<WrapperProps>`
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};
    background: #fff;
    position: absolute;
    right: 0;
    top: 100%;
    border-radius: 4px;
    box-shadow: 0 2px 10px ${(props) => rgba(props.theme.color.dark, 0.1)};
    overflow: hidden;
`;

export const Action = styled.div<ActionProps>`
    padding: 12px 20px;
    text-align: right;
    cursor: pointer;
    width: 100%;
    font-weight: 600;
    color: ${(props) => parseColorVariant(props)};

    &:hover {
        background: ${(props) => props.theme.color.light};
    }

    &:not(:last-child) {
        border: 1px solid ${(props) => rgba(props.theme.color.dark, 0.1)};
    }
`;

interface WrapperProps {
    isVisible: boolean;
}

interface ActionProps {
    variant: VariantType;
}
