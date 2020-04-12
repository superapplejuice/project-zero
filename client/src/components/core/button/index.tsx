import React from 'react'

import { ButtonProps } from './types'

import * as Styles from './styles'

const Button = ({ children, color, onClick, disabled }: ButtonProps) => (
  <Styles.Container color={color} onClick={onClick} disabled={disabled}>
    {children}
  </Styles.Container>
)

export default Button
