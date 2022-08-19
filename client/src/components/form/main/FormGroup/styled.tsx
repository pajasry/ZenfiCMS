import styled from "styled-components";

import { Text } from "@/components/core";

export const Wrapper = styled.div<WrapperProps>`
    &:not(:last-child) {
        margin-bottom: 24px;
    }
`;

export const Body = styled.div``;

export const Label = styled(Text)`
    margin-bottom: 8px;
`;

export const Error = styled(Text)`
    margin-top: 5px;
    color: ${({ theme }) => theme.color.danger};
`;

interface WrapperProps {
    isError: boolean;
}
