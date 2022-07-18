import styled from "styled-components";

import * as StyledViewHead from "@/components/layout/ViewHead/styled";

export const Wrapper = styled.div`
    & ${StyledViewHead.Wrapper} {
        display: flex;
        justify-content: space-between;
    }
`;
