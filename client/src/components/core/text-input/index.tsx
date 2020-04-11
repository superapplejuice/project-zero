import React from 'react'

import { InputProps } from './types'

import * as Styles from './styles'

const TextInput = ({
  highlight,
  variant,
  onChange,
  placeholder = 'Search',
  value,
  type,
}: InputProps) => (
  <Styles.Input
    highlight={highlight}
    variant={variant}
    onChange={onChange}
    placeholder={placeholder}
    value={value}
    type={type}
  />
)

export default TextInput
