import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const ResultsContainer = styled.ul`
  position: absolute;
  margin-top: 16px;
  background: white;
  border-radius: ${p => p.theme.styles.borderRadius};
  border: 1px solid ${p => p.theme.colors.black};
  padding: 8px 16px 0;
  width: 300px;
  list-style-type: none;
  list-style-position: inside;
`

export const Result = styled.li`
  cursor: pointer;
  font-size: 0.8rem;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${p => p.theme.colors.gray};
  display: flex;
  align-items: center;

  :last-of-type {
    margin: 0;
    border: none;
  }
`

export const ResultImage = styled.img`
  margin: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  border-radius: ${p => p.theme.styles.borderRadius};
`

export const ResultName = styled.p`
  margin: 0 0 0 8px;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
