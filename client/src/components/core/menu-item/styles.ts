import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;

  a {
    margin: 0;
    padding: 0;
    transition: 0.4s cubic-bezier(0.2, 0.6, 0.2, 1);
    :hover {
      color: ${p => p.theme.orange};
    }
  }
`
