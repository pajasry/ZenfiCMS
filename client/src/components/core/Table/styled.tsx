import { RowAction as RowActionType, Variant } from "@/types";
import styled from "styled-components";
import { rgba } from "polished";

import * as StyledIcon from "@/components/core/Icon/styled";

export const Wrapper = styled.div``;

export const RowHead = styled.div`
    display: flex;
    padding: 0 12px 12px;
`;

export const Row = styled.div<RowProps>`
    display: flex;
    padding: 20px 12px;
    background: #fff;
    position: relative;
    border-bottom: 2px solid ${(props) => props.theme.color.white};
    z-index: ${(props) => (props.active ? 10 : 1)};

    &:nth-child(2) {
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
    }

    &:last-child {
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
    }
`;

export const RowStatus = styled.div``;

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

export const RowActionsPopup = styled.div<RowActionsPopupProps>`
    display: ${(props) => (props.visible ? "block" : "none")};
    background: #fff;
    position: absolute;
    right: 0;
    top: 100%;
    border-radius: 4px;
    box-shadow: 0 2px 10px ${(props) => rgba(props.theme.color.info, 0.1)};
`;

export const RowAction = styled.div<RowActionProps>`
    padding: 12px;
    cursor: pointer;
    width: 100%;
    color: ${({ theme, variant = "info" }) => theme.color[variant as Variant]};

    &:hover {
        background: ${(props) => props.theme.color.white};
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

interface RowActionsPopupProps {
    visible: boolean;
}

type RowActionProps = Pick<RowActionType<any>, "variant">;
