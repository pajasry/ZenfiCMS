import styled from "styled-components";
import { TemplateProps } from "@/components/layout";

import * as StyledSidebar from "@/components/layout/Sidebar/styled";
import * as StyledNavigation from "@/components/layout/Navigation/styled";

export const Wrapper = styled.div`
    display: grid;

    & ${StyledSidebar.Wrapper} {
        width: 200px;
        height: 100vh;
        grid-column: 1 / 2;
        grid-row: 1 / 4;
    }

    & ${StyledNavigation.Wrapper} {
        grid-column: 2 / 3;
        height: 96px;
        padding: 0 32px;
    }
`;

export const Body = styled.div<BodyProps>`
    width: calc(100vw - 200px);
    grid-column: 2 /3;
    padding: ${({ fluid }) => (fluid ? 0 : "0 32px")};
`;

type BodyProps = Pick<TemplateProps, "fluid">;
