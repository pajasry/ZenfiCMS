import { rgba } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Field = styled.input`
    width: 100%;
    padding: 14px 16px;
    border-radius: 4px;
    border: none;
    outline-style: solid;
    outline-width: 2px;
    outline-color: ${({ theme }) => rgba(theme.color.dark, 0.1)};
    background: ${({ theme }) => theme.color.light};

    &:focus {
        outline-color: ${({ theme }) => rgba(theme.color.dark, 0.2)};
    }
`;
