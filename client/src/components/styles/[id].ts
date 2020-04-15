import styled from 'styled-components'

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

  img {
    height: 200px;
    width: 200px;
    object-fit: cover;
    object-position: center;
    border: 1px solid ${p => p.theme.colors.gray};
    border-radius: ${p => p.theme.styles.borderRadius};
    margin: 16px;
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
    margin: 0;
    padding: 0;
  }
`

export const Name = styled.h1`
  font-size: 2rem;
  word-wrap: normal;
`

export const Description = styled.p`
  font-size: 1rem;
  white-space: pre-wrap;
`

export const Price = styled.p`
  font-size: 1rem;
`

export const Created = styled.p`
  font-size: 1rem;
`
