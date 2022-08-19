import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  :root{
    --toastify-color-light: ${(props) => props.theme.color.light};
    --toastify-color-dark: ${(props) => props.theme.color.dark};
    --toastify-color-info: ${(props) => props.theme.color.info};
    --toastify-color-success: ${(props) => props.theme.color.success};
    --toastify-color-warning: ${(props) => props.theme.color.warning};
    --toastify-color-error: ${(props) => props.theme.color.danger};
  }
  
  body{
    background: ${({ theme }) => theme.color.light}
  }
  
  button, input, body, textarea {
    font-family: ${({ theme }) => theme.fontFamily.manrope};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.color.dark};
    font-family: ${({ theme }) => theme.fontFamily.manrope};
  }
  
  a {
    font-weight: 500;
    color: ${({ theme }) => theme.color.dark};
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Wrapper = styled.div``;

export const Loading = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
