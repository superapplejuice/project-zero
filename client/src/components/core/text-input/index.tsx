import React from 'react'

import { InputProps } from './types'

import * as Styles from './styles'

const TextInput = ({
  highlight,
  variant,
  placeholder,
  value,
  type,
  label,
  name,
  onChange,
  onBlur,
}: InputProps) => (
  <Styles.Container highlight={highlight}>
    <Styles.Label>{label}</Styles.Label>
    <Styles.Input
      highlight={highlight}
      variant={variant}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      type={type}
      onBlur={onBlur}
      name={name}
    />
  </Styles.Container>
)

export default TextInput
