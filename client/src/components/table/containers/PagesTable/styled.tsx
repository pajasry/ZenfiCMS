import styled from "styled-components";

import * as StyledPagination from "@/components/layout/main/Pagination/styled";
import * as StyledTable from "@/components/table/main/Table/styled";

export const Wrapper = styled.div`
    ${StyledTable.Wrapper} {
        min-height: 700px;
        margin-bottom: 24px;
    }

    ${StyledPagination.Wrapper} {
        margin-left: auto;
    }

    a {
        text-decoration: none;

        strong {
            color: ${({ theme }) => theme.color.danger};
        }

        &:hover {
            text-decoration: underline;
        }
    }
`;
