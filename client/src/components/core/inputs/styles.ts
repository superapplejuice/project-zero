import styled, { css } from 'styled-components'

import { InputProps } from './types'

export const Container = styled.div<Pick<InputProps, 'highlight'>>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;

  > input,
  textarea {
    :focus {
      background: ${p => p.theme.colors.gray};
      border: 1px solid
        ${p =>
          p.highlight === 'blue' ? p.theme.colors.blue : p.theme.colors.orange};
    }
  }

  :hover {
    color: ${p =>
      p.highlight === 'blue' ? p.theme.colors.blue : p.theme.colors.orange};

    > input,
    textarea {
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
  width: 300px;
  font-size: 1rem;
`

export const Input = styled.input<InputProps>`
  ${_BaseStyles};

  ${p =>
    p.variant === 'navigation' &&
    css`
      padding: 8px 16px;
    `};
`

export const TextArea = styled.textarea<InputProps>`
  ${_BaseStyles};

  height: 200px;
`

export const LoadingContainer = styled.div`
  position: absolute;
  right: 8px;
  top: 10px;
`

export const Label = styled.label`
  margin-left: 8px;
  font-size: 0.8rem;
  font-weight: bold;
`
