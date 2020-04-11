import React from 'react'

export type InputProps = {
  variant?: 'navigation'
  highlight?: 'blue'
  placeholder?: string
  value: string | number | string[]
  type: 'text' | 'email' | 'password' | 'number' | 'radio'
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
