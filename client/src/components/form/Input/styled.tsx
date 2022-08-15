import { rgba } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Field = styled.input`
    width: 100%;
    padding: 14px 16px;
    border-radius: 4px;
    border-style: solid;
    border-width: 2px;
    outline: none;
    border-color: ${({ theme }) => rgba(theme.color.dark, 0.1)};
    background: ${({ theme }) => theme.color.light};
    resize: none;

    &:focus {
        border-color: ${({ theme }) => rgba(theme.color.dark, 0.3)};
    }
`;
