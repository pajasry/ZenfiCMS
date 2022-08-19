import styled from "styled-components";

import * as StyledNavigation from "@/components/layout/main/Navigation/styled";
import * as StyledSidebar from "@/components/layout/main/Sidebar/styled";
import { AdminTemplateProps } from "@/components/layout/templates";

export const Wrapper = styled.div`
    display: grid;
    grid-template-rows: min-content 1fr;
    overflow: hidden;

    & ${StyledSidebar.Wrapper} {
        width: 200px;
        height: 100vh;
        grid-column: 1 / 2;
        grid-row: 1 / 3;
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
    grid-row: 2 / 3;
    padding: ${({ fluid }) => (fluid ? 0 : "0 32px")};
`;

type BodyProps = Pick<AdminTemplateProps, "fluid">;
