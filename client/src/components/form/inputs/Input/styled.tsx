import { rgba } from "polished";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
`;

export const Field = styled.input<FieldProps>`
    width: 100%;
    padding: 14px 16px;
    border-radius: 4px;
    border-style: solid;
    border-width: 2px;
    outline: none;
    border-color: ${({ theme }) => rgba(theme.color.dark, 0.1)};
    background: ${({ theme }) => theme.color.light};
    resize: none;

    ${(props) =>
        props.isPrepend &&
        css`
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        `}

    &:focus {
        border-color: ${({ theme }) => rgba(theme.color.dark, 0.3)};
    }
`;

export const Prepend = styled.div`
    left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 12px;
    display: flex;
    align-items: center;
    background: ${({ theme }) => rgba(theme.color.dark, 0.1)};
`;

interface FieldProps {
    isPrepend: boolean;
}
