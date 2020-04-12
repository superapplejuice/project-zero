import React from 'react'

export type ButtonProps = {
  children: React.ReactNode
  color?: 'blue'
  onClick: (event: React.MouseEvent) => void
  disabled?: boolean
}
