import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid ${p => p.theme.colors.gray};
  height: 64px;
  margin-bottom: 16px;
  padding: 0 32px;
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 500px;

  > div,
  form {
    align-self: center;
  }
`

export const Search = styled.form``
