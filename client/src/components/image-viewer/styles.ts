import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 99;
`

export const MainViewer = styled.img`
  margin: auto;
  padding: auto;
  max-height: 500px;
  object-fit: cover;
  object-position: center;
  border-radius: ${p => p.theme.styles.borderRadius};
`

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto 0;
`

export const CarouselImage = styled.img`
  cursor: pointer;
  height: 100px;
  width: 100px;
  object-fit: cover;
  object-position: center;
  margin: 0 24px;
  border-radius: ${p => p.theme.styles.borderRadius};
`
