import styled, { DefaultTheme, createGlobalStyle } from 'styled-components'

export const theme: DefaultTheme = {
  black: '#2A2728',
  blue: '#2B85BE',
  gray: '#E1DFDB',
  orange: '#F99227',
  yellow: '#EBCC72',
}

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 18px;
  }

  body {
    margin: 0;
    padding: 0;

    font-family: 'Fira Sans', sans-serif;
    font-weight: normal;
    font-style: normal;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: ${p => p.theme.black};
  }
`

export const GlobalContainer = styled.div`
  background: white;
  color: ${p => p.theme.black};
`

export const PageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`
