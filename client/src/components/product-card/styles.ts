import styled, { css } from 'styled-components'

import { BoxShadow } from 'components/styles/global'

export const Container = styled.a`
  cursor: pointer;
  width: 200px;
  height: 300px;
  border: 1px solid ${p => p.theme.colors.gray};
  border-radius: ${p => p.theme.styles.borderRadius};
  margin: 0 24px 32px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  transition: ${p => p.theme.styles.transition};

  :hover {
    border: 1px solid ${p => p.theme.colors.yellow};
    ${BoxShadow};
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  object-fit: contain;
  object-position: center;
  margin: 0 auto;
  margin: 12px 0;
  height: 125px;
`

export const Name = styled.h1`
  margin: 0 0 8px;
  padding: 0;
  font-size: 1.2rem;
`

export const Detail = styled.p<{ className?: string }>`
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  ${p =>
    p.className === 'price' &&
    css`
      font-size: 1rem;
      margin-bottom: 4px;
    `}
`
