import React from 'react'

import { ButtonProps } from './types'

import * as Styles from './styles'

const Button = ({ children, color, onClick, disabled, type }: ButtonProps) => (
  <Styles.Container
    color={color}
    onClick={onClick}
    disabled={disabled}
    type={type}
  >
    {children}
  </Styles.Container>
)

export default Button
