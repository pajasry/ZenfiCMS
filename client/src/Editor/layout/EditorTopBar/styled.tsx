import styled from "styled-components";

import * as StyledButton from "@/components/core/Button/styled";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding: 12px 24px;
`;

export const HistoryActions = styled.div`
    display: flex;
    align-items: center;

    & ${StyledButton.Wrapper} {
        padding: 9px 13px;
    }

    & ${StyledButton.Wrapper}:not(:last-child) {
        margin-right: 12px;
    }
`;

export const DevicesActions = styled.div``;

export const SaveActions = styled.div``;
