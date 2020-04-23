import React from 'react'
import { ThemeProvider } from 'styled-components'
import { prepareClientPortals } from '@jesstelford/react-portal-universal'

import { useFetchUser } from 'resolvers/queries'
import { UserProvider } from 'context/user-context'

import NavigationBar from 'components/navigation-bar'
import Meta from './meta'
import { theme, GlobalStyle, GlobalContainer, PageContainer } from './styles'

if (typeof window !== 'undefined') {
  prepareClientPortals()
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data } = useFetchUser()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalContainer>
        <UserProvider value={{ user: data?.fetchUser }}>
          <Meta />
          <div id="modal" />
          <NavigationBar />
          <PageContainer>{children}</PageContainer>
        </UserProvider>
      </GlobalContainer>
    </ThemeProvider>
  )
}

export default Layout
