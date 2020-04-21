import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 99;
`

export const ModalContainer = styled.div`
  background: white;
  height: 200px;
  width: 400px;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.styles.borderRadius};
  padding: 16px;

  h1,
  p {
    padding: 0;
  }
`

export const Header = styled.h1`
  font-size: 1.2rem;
  margin: auto 0;
`

export const Content = styled.p`
  font-size: 1rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`
