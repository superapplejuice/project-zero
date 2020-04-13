import styled, { css } from 'styled-components'

const _BaseHeader = css`
  margin: 0 0 16px 0;
  padding: 0;
`

export const Container = styled.div`
  margin-bottom: 32px;
`

export const Header = styled.h1`
  ${_BaseHeader};
  font-size: 24px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin-bottom: 32px;
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

export const Warning = styled.p`
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  font-size: 0.6rem;
  color: red;
`
