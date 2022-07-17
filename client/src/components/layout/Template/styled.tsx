import styled from "styled-components";

import * as StyledNavigation from "@/components/layout/Navigation/styled";

export const Wrapper = styled.div`
    display: flex;

    & ${StyledNavigation.Wrapper} {
        width: 200px;
        height: 100vh;
    }
`;

export const Body = styled.div`
    width: calc(100vw - 200px);
`;
