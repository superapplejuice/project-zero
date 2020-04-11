import styled, { css } from 'styled-components'

import { InputProps } from './types'

const _BaseStyles = css`
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.styles.borderRadius};
  transition: ${p => p.theme.styles.transition};

  :hover {
    background: ${p => p.theme.colors.gray};
    border: 1px solid ${p => p.theme.colors.orange};

    ::placeholder {
      color: ${p => p.theme.colors.orange};
    }
  }

  :focus {
    background: ${p => p.theme.colors.black};
    border: 1px solid ${p => p.theme.colors.orange};
    color: white;
  }
`

export const Input = styled.input<InputProps>`
  ${_BaseStyles};

  ${p =>
    p.variant === 'navigation' &&
    css`
      padding: 8px 16px;
      width: 256px;
      font-size: 1rem;
    `};

  ${p =>
    p.highlight === 'blue' &&
    css`
      :hover {
        border: 1px solid ${p => p.theme.colors.blue};

        ::placeholder {
          color: ${p => p.theme.colors.blue};
        }
      }

      :focus {
        border: 1px solid ${p => p.theme.colors.blue};
      }
    `}
`
