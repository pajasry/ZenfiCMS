import styled from "styled-components";

export const Wrapper = styled.div``;

export const Field = styled.input`
    width: 100%;
    padding: 14px 16px;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    border-color: #fff;
    outline: none;
    background: ${({ theme }) => theme.color.white};

    &:focus {
        border-color: ${({ theme }) => theme.color.info};
    }
`;
