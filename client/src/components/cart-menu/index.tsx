import React, { Fragment, useState } from 'react'

import { FetchCart } from 'resolvers/queries/types'

import { useFetchCart, FETCH_CART } from 'resolvers/queries'
import { useRemoveFromCart, useClearCart } from 'resolvers/mutations'

import { MenuItem, Button } from 'components/core'
import * as Styles from './styles'

const CartMenu = () => {
  const [displayCart, setDisplayCart] = useState(false)

  const { data } = useFetchCart()
  const cart = data?.fetchCart

  const [removeFromCart, { loading: removeLoading }] = useRemoveFromCart()
  const handleRemoveFromCart = async (id: string) =>
    await removeFromCart({
      variables: {
        id,
      },
      update: (cache, { data }) => {
        const { fetchCart } = cache.readQuery<FetchCart>({
          query: FETCH_CART,
        })

        const removedItem = data?.removeFromCart
        const updatedList = fetchCart?.filter(
          cartItem => cartItem?.id !== removedItem?.id
        )

        return cache.writeQuery<FetchCart>({
          query: FETCH_CART,
          data: {
            fetchCart: updatedList,
          },
        })
      },
    })

  const [clearCart, { loading: clearLoading }] = useClearCart()
  const handleClearCart = async () =>
    await clearCart({
      update: (cache, _result) =>
        cache.writeQuery<FetchCart>({
          query: FETCH_CART,
          data: {
            fetchCart: [],
          },
        }),
    })

  const renderCartItems = () => (
    <Fragment>
      {cart?.map(cartItem => (
        <Styles.CartItem key={cartItem?.id}>
          <Styles.CartImage
            src={cartItem?.item?.images[0]}
            alt={cartItem?.item?.id}
          />
          <Styles.ItemName>{cartItem?.item?.name}</Styles.ItemName>
          <Button
            disabled={removeLoading || clearLoading}
            onClick={() => handleRemoveFromCart(cartItem?.id)}
            type="button"
            size="small"
          >
            X
          </Button>
        </Styles.CartItem>
      ))}
      <Styles.ButtonsContainer>
        <Button
          disabled={removeLoading || clearLoading}
          onClick={handleClearCart}
          type="button"
          size="small"
        >
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
        {displayCart && cart && (
          <Styles.CartContainer>
            {cart?.length > 0 ? (
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
