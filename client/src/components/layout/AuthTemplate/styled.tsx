import styled from "styled-components";

import * as StyledText from "@/components/core/Text/styled";

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.color.light};
`;

export const Body = styled.div`
    width: 460px;
    border-radius: 4px;
    background: #fff;
    padding: 32px;
`;

export const BodyTitle = styled(StyledText.Wrapper)`
    margin-bottom: 36px;
`;
