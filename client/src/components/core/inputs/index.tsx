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
  children,
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
    {children}
  </Styles.Container>
)

const TextArea = ({
  highlight,
  variant,
  placeholder,
  value,
  type,
  label,
  name,
  onChange,
  onBlur,
  children,
}: InputProps) => (
  <Styles.Container highlight={highlight}>
    <Styles.Label>{label}</Styles.Label>
    <Styles.TextArea
      highlight={highlight}
      variant={variant}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      type={type}
      onBlur={onBlur}
      name={name}
    />
    {children}
  </Styles.Container>
)

export default { TextInput, TextArea }
