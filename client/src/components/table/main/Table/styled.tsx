import { rgba } from "polished";
import styled from "styled-components";

import * as StyledIcon from "@/components/core/Icon/styled";

export const Wrapper = styled.div``;

export const RowHead = styled.div`
    display: flex;
    align-items: center;
    padding: 0 12px 12px;
`;

export const Row = styled.div<RowProps>`
    display: flex;
    align-items: center;
    padding: 20px 12px;
    background: #fff;
    position: relative;
    z-index: ${(props) => (props.active ? 10 : 1)};

    &:nth-child(2) {
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
    }

    &:last-child {
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    &:not(:last-child) {
        border-bottom: 1px solid ${(props) => rgba(props.theme.color.dark, 0.1)};
    }
`;

export const RowActions = styled.button`
    position: absolute;
    right: 15px;
    top: 50%;
    display: flex;
    transform: translateY(-50%);
    background: none;
    border: none;

    & ${StyledIcon.Wrapper} {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`;

export const Column = styled.div<ColumnProps>`
    flex: ${(props) => props.grow};
    font-weight: 500;
`;

interface RowProps {
    active: boolean;
}

interface ColumnProps {
    grow: number;
}
