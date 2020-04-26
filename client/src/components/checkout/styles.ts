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

export const CheckoutForm = styled.form`
  border: 1px solid ${p => p.theme.colors.gray};
  border-radius: ${p => p.theme.styles.borderRadius};
  padding: 16px;
  background: white;
  display: flex;
  flex-direction: column;
  width: 400px;
`

export const Header = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 8px;
`

export const Price = styled.p`
  font-size: 1rem;
  margin-bottom: 16px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 24px;
`
