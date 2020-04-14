import React from 'react'

export type InputProps = {
  variant?: 'navigation'
  highlight?: 'blue'
  placeholder?: string
  value: string | number | string[]
  type: 'text' | 'email' | 'password' | 'number'
  label?: string
  name?: string
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  children?: React.ReactNode
}
