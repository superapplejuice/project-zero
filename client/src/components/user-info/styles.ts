import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const _BaseChildContainer = css`
  border: 1px solid ${p => p.theme.colors.gray};
  border-radius: ${p => p.theme.styles.borderRadius};
  padding: 16px;
`

export const UserContainer = styled.div`
  ${_BaseChildContainer};
  margin-bottom: 32px;
`

export const ItemsContainer = styled.div`
  ${_BaseChildContainer};
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
