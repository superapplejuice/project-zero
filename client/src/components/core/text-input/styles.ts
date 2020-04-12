import styled, { css } from 'styled-components'

import { InputProps } from './types'

export const Container = styled.div<Pick<InputProps, 'highlight'>>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > input {
    :focus {
      background: ${p => p.theme.colors.gray};
      border: 1px solid
        ${p =>
          p.highlight === 'blue' ? p.theme.colors.blue : p.theme.colors.orange};
      color: ${p =>
        p.highlight === 'blue' ? p.theme.colors.blue : p.theme.colors.orange};
    }
  }

  :hover {
    color: ${p =>
      p.highlight === 'blue' ? p.theme.colors.blue : p.theme.colors.orange};

    > input {
      background: ${p => p.theme.colors.gray};
      border: 1px solid
        ${p =>
          p.highlight === 'blue' ? p.theme.colors.blue : p.theme.colors.orange};

      ::placeholder {
        color: ${p =>
          p.highlight === 'blue' ? p.theme.colors.blue : p.theme.colors.orange};
      }
    }
  }
`

const _BaseStyles = css`
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.styles.borderRadius};
  transition: ${p => p.theme.styles.transition};
  padding: 8px 16px;
  width: 512px;
  font-size: 1rem;
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
`

export const Label = styled.label`
  margin-left: 8px;
  font-size: 0.8rem;
  font-weight: bold;
`
