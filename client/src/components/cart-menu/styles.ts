import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const MenuItem = styled.div``

export const CartContainer = styled.ul`
  position: absolute;
  margin-top: 4px;
  background: white;
  border-radius: ${p => p.theme.styles.borderRadius};
  border: 1px solid ${p => p.theme.colors.black};
  padding: 8px 16px;
  list-style-type: none;
  list-style-position: inside;
  min-width: 100px;
`

export const CartItem = styled.li`
  font-size: 0.8rem;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${p => p.theme.colors.gray};
  display: flex;
  align-items: center;
`

export const CartImage = styled.img`
  margin: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  border-radius: ${p => p.theme.styles.borderRadius};
`

export const ItemName = styled.p`
  margin: 0 0 0 8px;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const EmptyPlaceholder = styled.p`
  font-size: 0.8rem;
  margin: auto;
  text-align: center;
`
