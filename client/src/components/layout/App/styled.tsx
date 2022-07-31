import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body{
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;    
    color: ${({ theme }) => theme.color.info};
    font-family: ${({ theme }) => theme.fontFamily.manrope};
    background: ${({ theme }) => theme.color.white}
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
