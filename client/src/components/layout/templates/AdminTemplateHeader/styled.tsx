import styled from "styled-components";

import * as StyledButton from "@/components/core/Button/styled";

export const Wrapper = styled.div`
    margin-bottom: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const Actions = styled.div<ActionsProps>`
    display: ${(props) => (props.isVisible ? "flex" : "none")};
    align-items: center;
    flex-wrap: wrap;

    ${StyledButton.Wrapper}:not(:last-child) {
        margin-right: 12px;
    }
`;

interface ActionsProps {
    isVisible: boolean;
}
