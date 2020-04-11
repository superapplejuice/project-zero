import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const UploadContainer = styled.div<{ isActive: boolean }>`
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.styles.borderRadius};
  padding: 16px 0;
  width: 600px;
  cursor: pointer;
  outline: none;
  text-align: center;
  transition: ${p => p.theme.styles.transition};

  :hover {
    background: ${p => p.theme.colors.gray};
    border: 1px solid ${p => p.theme.colors.blue};
    color: ${p => p.theme.colors.blue};
  }

  ${p =>
    p.isActive &&
    css`
      background: ${p => p.theme.colors.black};
      border: 1px solid ${p => p.theme.colors.blue};
      color: white;
    `}
`

export const Message = styled.p<{ errors?: boolean }>`
  margin: 0;
  padding: 0;
  font-size: 0.8rem;

  ${p =>
    p.errors &&
    css`
      color: red;
    `}
`

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 16px;

  img {
    border: 1px solid ${p => p.theme.colors.gray};
    border-radius: ${p => p.theme.styles.borderRadius};
    background-size: cover;
    background-position: center;
    max-height: 300px;
    max-width: 300px;
    margin-left: 24px;
    transition: ${p => p.theme.styles.transition};

    :first-of-type {
      margin: 0;
    }

    :hover {
      border: 1px solid ${p => p.theme.colors.blue};
      box-shadow: 8px 8px 16px 0 ${p => p.theme.colors.gray};
    }
  }
`
