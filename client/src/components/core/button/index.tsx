import React from 'react'

import { ButtonProps } from './types'

import * as Styles from './styles'

const Button = ({
  children,
  color,
  onClick,
  disabled,
  type,
  size,
}: ButtonProps) => (
  <Styles.Container
    color={color}
    onClick={onClick}
    disabled={disabled}
    type={type}
    size={size}
  >
    {children}
  </Styles.Container>
)

export default Button
