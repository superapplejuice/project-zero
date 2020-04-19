import React, { useState, Fragment } from 'react'
import { useRouter } from 'next/router'

import { useUserContext } from 'context/user-context'
import { useLogout } from 'resolvers/mutations'

import { MenuItem, Inputs } from 'components/core'
import * as Styles from './styles'

const NavigationBar = () => {
  const { user } = useUserContext()
  const router = useRouter()
  const [value, setValue] = useState('')
  const [logout] = useLogout({
    refetchQueries: ['FetchUser'],
    awaitRefetchQueries: true,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.currentTarget.value)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setValue('')
  }

  const handleLogout = () => {
    logout()
    return router.push('/')
  }

  return (
    <Styles.Container>
      <Styles.Menu>
        <MenuItem.LinkItem href="/" title="ZERO" />
        <Styles.Search onSubmit={handleSubmit}>
          <Inputs.TextInput
            onChange={handleChange}
            variant="navigation"
            value={value}
            type="text"
            placeholder="Search"
          />
        </Styles.Search>
      </Styles.Menu>
      <Styles.Menu>
        {user ? (
          <Fragment>
            <MenuItem.LinkItem href="/profile" title="Profile" />
            <MenuItem.LinkItem href="/likes" title="Likes" />
            <MenuItem.LinkItem href="/sell" title="Sell" />
            <MenuItem.ButtonItem onClick={handleLogout} title="Logout" />
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
