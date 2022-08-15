import styled from "styled-components";

import * as StyledText from "@/components/core/Text/styled";

export const Wrapper = styled.div<WrapperProps>`
    &:not(:last-child) {
        margin-bottom: 24px;
    }
`;

export const Body = styled.div``;

export const Label = styled(StyledText.Wrapper)`
    margin-bottom: 8px;
`;

export const Error = styled(StyledText.Wrapper)`
    margin-top: 5px;
    color: ${({ theme }) => theme.color.danger};
`;

interface WrapperProps {
    isError: boolean;
}
