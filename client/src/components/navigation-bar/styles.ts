import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  border-bottom: 1px solid ${p => p.theme.gray};
  height: 48px;
  margin-bottom: 16px;
  padding: 0 32px;
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;

  width: 100%;
`
