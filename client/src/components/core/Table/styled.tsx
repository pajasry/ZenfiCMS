import styled from "styled-components";
import { rgba } from "polished";

import * as StyledIcon from "@/components/core/Icon/styled";

export const Wrapper = styled.div``;

export const RowHead = styled.div`
    display: flex;
    padding: 0 12px 12px;
`;

export const Row = styled.div`
    display: flex;
    padding: 20px 12px;
    background: #fff;
    position: relative;
`;

export const RowStatus = styled.div``;

export const RowActions = styled.div`
    position: absolute;
    right: 15px;
    top: 50%;
    display: flex;
    transform: translateY(-50%);

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
    padding: 6px 0;
    border-radius: 4px;
    box-shadow: 0 2px 10px ${(props) => rgba(props.theme.color.info, 0.1)};
`;

export const RowAction = styled.div`
    padding: 6px 12px;
`;

export const Column = styled.div<ColumnProps>`
    flex: ${(props) => props.grow};
    font-weight: 600;
`;

interface ColumnProps {
    grow: number;
}

interface RowActionsPopupProps {
    visible: boolean;
}
