import React from 'react'

import { MenuItem } from 'components/core'
import * as Styles from './styles'

const NavigationBar = () => (
  <Styles.Container>
    <Styles.Menu>
      <MenuItem href="/" title="ZERO" />
      <Styles.Search>
        <input type="text" placeholder="Search" />
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

export default NavigationBar
