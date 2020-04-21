import React from 'react'

export type ButtonProps = {
  children: React.ReactNode
  color?: 'blue' | 'yellow'
  onClick: (event: React.FormEvent<HTMLFormElement> | React.MouseEvent) => void
  disabled?: boolean
  type: 'submit' | 'button' | 'reset'
}
