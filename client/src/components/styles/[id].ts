import styled from 'styled-components'

import { BoxShadow } from 'components/styles/global'

export const Container = styled.div`
  padding: 32px;
  display: flex;
  justify-content: center;
`

export const ProductContainer = styled.div`
  height: 100%;
  width: 800px;
  padding: 32px;
  border: 1px solid ${p => p.theme.colors.gray};
  border-radius: ${p => p.theme.styles.borderRadius};
  display: flex;
  flex-direction: row;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 60%;
  align-items: center;
  justify-content: space-evenly;

  img {
    height: 200px;
    width: 200px;
    object-fit: cover;
    object-position: center;
    border: 1px solid ${p => p.theme.colors.gray};
    border-radius: ${p => p.theme.styles.borderRadius};
    transition: ${p => p.theme.styles.transition};

    :hover {
      border: 1px solid ${p => p.theme.colors.yellow};
      ${BoxShadow};
    }
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-sizing: border-box;
  width: 40%;
  padding: 16px 0;
  color: ${p => p.theme.colors.black};

  h1,
  p {
    margin: 0 0 24px;
    padding: 0;
  }
`

export const Name = styled.h1`
  font-size: 2rem;
  word-wrap: normal;
  max-height: 100px;
  overflow: scroll;
`

export const Description = styled.p`
  font-size: 1rem;
  white-space: pre-wrap;
  max-height: 100px;
  overflow: scroll;
`

export const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;
`

export const Created = styled.div`
  font-size: 1rem;
`

export const User = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0 !important;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`
