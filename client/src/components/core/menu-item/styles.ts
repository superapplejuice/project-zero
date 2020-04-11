import styled from 'styled-components'

export const Container = styled.div`
  a {
    border-radius: ${p => p.theme.styles.borderRadius};
    padding: 8px 16px;
    cursor: pointer;
    font-weight: bold;
    transition: ${p => p.theme.styles.transition};

    :hover {
      background: ${p => p.theme.colors.gray};
      color: ${p => p.theme.colors.orange};
    }
  }
`
