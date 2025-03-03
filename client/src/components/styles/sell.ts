import styled, { css } from 'styled-components'

const _BaseHeader = css`
  margin: 0 0 16px 0;
  padding: 0;
`

export const Container = styled.div``

export const Header = styled.h1`
  ${_BaseHeader};
  font-size: 24px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  > div {
    margin-right: 32px;
  }
`

export const FieldGroup = styled.div`
  border: 1px solid ${p => p.theme.colors.gray};
  border-radius: ${p => p.theme.styles.borderRadius};
  padding: 16px;

  > div {
    margin-bottom: 32px;

    &:last-child {
      margin: 0;
    }
  }
`

export const FieldHeader = styled.h1`
  ${_BaseHeader};
  font-size: 1rem;
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
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
