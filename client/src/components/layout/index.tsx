import React from 'react'
import { ThemeProvider } from 'styled-components'

import Meta from './meta'
import { theme, GlobalStyle, GlobalContainer, PageContainer } from './styles'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <GlobalContainer>
      <Meta />
      <PageContainer>{children}</PageContainer>
    </GlobalContainer>
  </ThemeProvider>
)

export default Layout
