import styled from "styled-components";

import * as StyledPagination from "@/components/core/Pagination/styled";
import * as StyledTable from "@/components/core/Table/styled";

export const Wrapper = styled.div`
    & ${StyledTable.Wrapper} {
        min-height: 700px;
        margin-bottom: 24px;
    }

    & ${StyledPagination.Wrapper} {
        margin-left: auto;
    }
`;
