import styled from "styled-components";

import { StyledButton } from "@/components/shared/Button/styled";

/**
 * Styles for EditorTopBar component
 */

export const StyledEditorTopBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.color.white};
    border-bottom: 2px solid ${({ theme }) => theme.color.grey._3};
    padding: 12px 24px;
`;

export const StyledEditorTopBarHistoryActions = styled.div`
    display: flex;
    align-items: center;

    & ${StyledButton} {
        padding: 9px 13px;
    }

    & ${StyledButton}:not(:last-child) {
        margin-right: 12px;
    }
`;

export const StyledEditorTopBarDevicesActions = styled.div``;

export const StyledEditorTopBarSaveActions = styled.div``;
