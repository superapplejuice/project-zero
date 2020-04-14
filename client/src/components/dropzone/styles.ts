import styled, { css } from 'styled-components'

const width = '500px'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const UploadContainer = styled.div<{ isActive: boolean }>`
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.styles.borderRadius};
  padding: 16px 0;
  width: ${width};
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
  width: ${width};

  img {
    border: 1px solid ${p => p.theme.colors.gray};
    border-radius: ${p => p.theme.styles.borderRadius};
    background-size: cover;
    background-position: center;
    max-width: 200px;
    margin: 16px;
    transition: ${p => p.theme.styles.transition};

    :hover {
      border: 1px solid ${p => p.theme.colors.blue};
      box-shadow: 8px 8px 16px 0 ${p => p.theme.colors.gray};
    }
  }
`
