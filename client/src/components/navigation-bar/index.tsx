import React, { useState } from 'react'

import { MenuItem, TextInput } from 'components/core'
import * as Styles from './styles'

const NavigationBar = () => {
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
          <TextInput
            onChange={handleChange}
            variant="navigation"
            value={value}
            type="text"
          />
        </Styles.Search>
      </Styles.Menu>
      <Styles.Menu>
        <MenuItem href="/register" title="Register" />
        <MenuItem href="/login" title="Login" />
        <MenuItem href="/profile" title="Profile" />
        <MenuItem href="/likes" title="Likes" />
        <MenuItem href="/sell" title="Sell" />
      </Styles.Menu>
    </Styles.Container>
  )
}

export default NavigationBar
