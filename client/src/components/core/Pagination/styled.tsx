import { rgba } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: max-content;
`;

export const Button = styled.button<ButtonProps>`
    padding: 10px 14px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    color: ${(props) => (props.isActive ? "#fff" : props.theme.color.primary)};
    background: ${(props) => (props.isActive ? props.theme.color.primary : "#fff")};

    &:hover {
        background: ${({ theme, isActive }) =>
            isActive ? theme.color.primary : rgba(theme.color.primary, 0.1)};
    }

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }

    &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
`;

interface ButtonProps {
    isActive?: boolean;
}
