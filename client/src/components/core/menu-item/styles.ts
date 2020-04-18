import styled from 'styled-components'

export const Container = styled.div`
  a,
  button {
    background: none;
    border: none;
    border-radius: ${p => p.theme.styles.borderRadius};
    padding: 8px 16px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: ${p => p.theme.styles.transition};

    :hover {
      background: ${p => p.theme.colors.gray};
      color: ${p => p.theme.colors.orange};
    }
  }
`
