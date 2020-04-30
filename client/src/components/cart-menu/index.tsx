import React, { Fragment, useState } from 'react'

import { useFetchItems } from 'resolvers/queries'

import { MenuItem, Button } from 'components/core'
import * as Styles from './styles'

const CartMenu = () => {
  const [displayCart, setDisplayCart] = useState(false)

  const { data } = useFetchItems()
  const items = data?.fetchItems

  const renderCartItems = () => (
    <Fragment>
      {items?.map(item => (
        <Styles.CartItem key={item?.id}>
          <Styles.CartImage src={item?.images[0]} alt={item?.id} />
          <Styles.ItemName>{item?.name}</Styles.ItemName>
        </Styles.CartItem>
      ))}
      <Styles.ButtonsContainer>
        <Button onClick={() => {}} type="button" size="small">
          Clear Cart
        </Button>
        <Button onClick={() => {}} type="button" size="small">
          Checkout
        </Button>
      </Styles.ButtonsContainer>
    </Fragment>
  )

  return (
    <Styles.Container>
      <Styles.MenuItem
        onMouseEnter={() => setDisplayCart(true)}
        onMouseLeave={() => setDisplayCart(false)}
      >
        <MenuItem.LinkItem href="/cart" title="Cart" />
        {displayCart && items && (
          <Styles.CartContainer>
            {items?.length > 0 ? (
              renderCartItems()
            ) : (
              <Styles.EmptyPlaceholder>
                No items in cart!
              </Styles.EmptyPlaceholder>
            )}
          </Styles.CartContainer>
        )}
      </Styles.MenuItem>
    </Styles.Container>
  )
}

export default CartMenu
