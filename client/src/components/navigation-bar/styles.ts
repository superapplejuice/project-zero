import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  border-bottom: 1px solid ${p => p.theme.colors.gray};
  height: 64px;
  margin-bottom: 16px;
  padding: 0 32px;
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  > div,
  form {
    align-self: center;
  }
`

export const Search = styled.form`
  input {
    border: 1px solid ${p => p.theme.colors.black};
    border-radius: ${p => p.theme.styles.borderRadius};
    padding: 8px 16px;
    width: 256px;
    font-size: 1rem;
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
  }
`
