import styled, { css } from 'styled-components'

import { ButtonProps } from './types'

const _BaseStyles = css<ButtonProps>`
  cursor: pointer;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.styles.borderRadius};
  font-size: ${p => (p.size === 'small' ? '0.8rem' : '1rem')};
  padding: ${p => (p.size === 'small' ? '6px 12px' : '12px 32px')};
  background: white;
  transition: ${p => p.theme.styles.transition};

  :hover {
    background: ${p => p.theme.colors.gray};
    border: 1px solid ${p => p.theme.colors.orange};
    color: ${p => p.theme.colors.orange};
  }
`

export const Container = styled.button<ButtonProps>`
  ${_BaseStyles}

  :disabled {
    pointer-events: none;
    background: ${p => p.theme.colors.gray};
    border: 1px solid ${p => p.theme.colors.gray};
    color: darkgray;
  }

  ${p =>
    p.color === 'blue' &&
    css`
      :hover {
        border: 1px solid ${p => p.theme.colors.blue};
        color: ${p => p.theme.colors.blue};
      }
    `}

  ${p =>
    p.color === 'yellow' &&
    css`
      :hover {
        border: 1px solid ${p => p.theme.colors.yellow};
        color: ${p => p.theme.colors.yellow};
      }
    `}
`
