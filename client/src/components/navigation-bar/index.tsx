import React, { Fragment } from 'react'
import { useRouter } from 'next/router'

import { useUserContext } from 'context/user-context'
import { useLogout } from 'resolvers/mutations'
import { FETCH_CURRENT_USER } from 'resolvers/queries'

import ItemSearch from 'components/item-search'
import CartMenu from 'components/cart-menu'
import { MenuItem } from 'components/core'
import * as Styles from './styles'

const NavigationBar = () => {
  const { user } = useUserContext()
  const router = useRouter()

  const [logout, { loading }] = useLogout({
    refetchQueries: [{ query: FETCH_CURRENT_USER }],
    awaitRefetchQueries: true,
  })

  const handleLogout = () => {
    logout()
    return router.push('/')
  }

  return (
    <Styles.Container>
      <Styles.Menu>
        <MenuItem.LinkItem href="/" title="ZERO" />
        <ItemSearch />
      </Styles.Menu>
      <Styles.Menu>
        {user ? (
          <Fragment>
            <MenuItem.LinkItem href="/profile" title="Profile" />
            <CartMenu />
            <MenuItem.LinkItem href="/sell" title="Sell" />
            <MenuItem.ButtonItem
              onClick={handleLogout}
              title="Logout"
              disabled={loading}
            />
          </Fragment>
        ) : (
          <Fragment>
            <MenuItem.LinkItem href="/register" title="Register" />
            <MenuItem.LinkItem href="/login" title="Login" />
          </Fragment>
        )}
      </Styles.Menu>
    </Styles.Container>
  )
}

export default NavigationBar
