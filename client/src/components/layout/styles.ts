import styled, { DefaultTheme, createGlobalStyle } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    orange: '#F99227',
    yellow: '#EBCC72',
    blue: '#2B85BE',
    gray: '#E1DFDB',
    black: '#2A2728',
  },
  styles: {
    borderRadius: '8px',
    transition: '0.4s cubic-bezier(0.2, 0.6, 0.2, 1)',
  },
}

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 18px;
  }

  body {
    font-family: 'Fira Sans', sans-serif;
    font-weight: normal;
    font-style: normal;
    line-height: 1.4;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: ${p => p.theme.colors.black};
  }

  button {
    font-family: inherit;
  }

  input,
  textarea {
    font-family: 'Fira Sans', sans-serif;
    outline: none;
    resize: none;
  }
`

export const GlobalContainer = styled.div`
  background: white;
  color: ${p => p.theme.colors.black};
`

export const PageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`
