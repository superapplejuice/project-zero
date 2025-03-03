import styled, { css, keyframes } from 'styled-components'

import { LoaderProps } from './types'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Container = styled.div<LoaderProps>`
  border: 4px solid ${p => p.theme.colors.gray};
  border-top: 4px solid ${p => p.theme.colors.blue};
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
  padding: 0;
  margin: auto;

  ${p =>
    p.size === 'x-small' &&
    css`
      border: 2px solid ${p => p.theme.colors.gray};
      border-top: 2px solid ${p => p.theme.colors.blue};
      animation: ${spin} 1s linear infinite;
      width: 20px;
      height: 20px;
    `};

  ${p =>
    p.size === 'small' &&
    css`
      width: 30px;
      height: 30px;
    `};

  ${p =>
    p.size === 'medium' &&
    css`
      width: 60px;
      height: 60px;
    `}

  ${p =>
    p.size === 'large' &&
    css`
      width: 120px;
      height: 120px;
    `}
`
