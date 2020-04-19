import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 32px;
`

export const FormGroup = styled.div`
  border: 1px solid ${p => p.theme.colors.gray};
  border-radius: ${p => p.theme.styles.borderRadius};
  padding: 16px;
  margin: 0 auto;
  width: 400px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  > div {
    margin-bottom: 32px;
  }
`

export const Header = styled.h1`
  margin: 0 0 16px 0;
  padding: 0;
  font-size: 1rem;
`

export const Warning = styled.p`
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  top: 2px;
  font-size: 0.6rem;
  color: red;
`
