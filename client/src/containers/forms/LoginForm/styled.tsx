import styled from "styled-components";

import * as StyledButton from "@/components/core/Button/styled";

export const Wrapper = styled.div`
    & ${StyledButton.Wrapper} {
        margin-left: auto;
    }
`;
