import styled from "styled-components";

import * as StyledIcon from "@/components/core/Icon/styled";

export const Wrapper = styled.nav`
    display: flex;
    align-items: center;
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;

    & ${StyledIcon.Wrapper} {
        width: 10px;
        height: 10px;
        margin-left: 9px;
    }
`;

export const UserImage = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 12px;

    & img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`;
