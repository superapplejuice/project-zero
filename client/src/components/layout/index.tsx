import React from 'react'
import { ThemeProvider } from 'styled-components'

import { useFetchUser } from 'resolvers/queries'
import { UserProvider } from 'context/user-context'

import NavigationBar from 'components/navigation-bar'
import Meta from './meta'
import { theme, GlobalStyle, GlobalContainer, PageContainer } from './styles'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data } = useFetchUser()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalContainer>
        <UserProvider value={{ user: data?.fetchUser }}>
          <Meta />
          <NavigationBar />
          <PageContainer>{children}</PageContainer>
        </UserProvider>
      </GlobalContainer>
    </ThemeProvider>
  )
}

export default Layout
