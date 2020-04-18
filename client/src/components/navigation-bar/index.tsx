import React, { useState, Fragment } from 'react'

import { useUserContext } from 'context/user-context'

import { MenuItem, Inputs } from 'components/core'
import * as Styles from './styles'

const NavigationBar = () => {
  const user = useUserContext()
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.currentTarget.value)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setValue('')
  }

  return (
    <Styles.Container>
      <Styles.Menu>
        <MenuItem href="/" title="ZERO" />
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
        {user?.fetchUser ? (
          <Fragment>
            <MenuItem href="/profile" title="Profile" />
            <MenuItem href="/likes" title="Likes" />
            <MenuItem href="/sell" title="Sell" />
          </Fragment>
        ) : (
          <Fragment>
            <MenuItem href="/register" title="Register" />
            <MenuItem href="/login" title="Login" />
          </Fragment>
        )}
      </Styles.Menu>
    </Styles.Container>
  )
}

export default NavigationBar
