import styled from "styled-components";

import * as StyledIcon from "@/components/core/Icon/styled";

export const Wrapper = styled.nav`
    background: #fff;
    padding: 15px 12px;
`;

export const Logo = styled.div`
    padding: 15px;
    margin-bottom: 10px;
`;

export const Menu = styled.ul``;

export const MenuItem = styled.li<MenuItemProps>`
    display: flex;
    align-items: center;
    padding: 15px;
    cursor: pointer;
    border-radius: 4px;
    background: ${({ theme, isActive }) => (isActive ? theme.color.white : "transparent")};

    &:not(:last-child) {
        margin-bottom: 4px;
    }

    &:hover {
        background: ${({ theme }) => theme.color.white};
    }

    & ${StyledIcon.Wrapper} {
        width: 18px;
        height: 18px;
        margin-right: 18px;
        opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
    }
`;

interface MenuItemProps {
    isActive: boolean;
}
