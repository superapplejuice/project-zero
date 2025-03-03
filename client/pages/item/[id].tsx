import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'

import { FetchItems, FetchCart } from 'resolvers/queries/types'

import { useUserContext } from 'context/user-context'
import {
  useFetchItem,
  FETCH_ITEMS,
  FETCH_USER,
  FETCH_CART,
} from 'resolvers/queries'
import { useDeleteItem, useAddToCart } from 'resolvers/mutations'
import { formatCurrency, formatTimeSince } from 'lib/formatters'

import Modal from 'components/modal'
import ImageViewer from 'components/image-viewer'
import { Loader, Button, ErrorMessage } from 'components/core'
import * as Styles from 'components/styles/[id]'

const Product = () => {
  const router = useRouter()
  const { id } = router.query
  const { user } = useUserContext()

  const [showModal, setShowModal] = useState(false)
  const [showViewer, setShowViewer] = useState(false)

  const [selectedImage, setSelectedImage] = useState<string>(null)

  const { data, loading: fetchLoading } = useFetchItem({
    variables: { id: String(id) },
  })
  const item = data?.fetchItem
  const isOwner = user?.username === item?.user?.username

  const [deleteItem, { loading: deleteLoading, error }] = useDeleteItem({
    refetchQueries: [{ query: FETCH_USER }],
  })
  const handleDelete = async () => {
    const { data } = await deleteItem({
      variables: { id: String(id) },
      update: (cache, { data }) => {
        const { fetchItems } = cache.readQuery<FetchItems>({
          query: FETCH_ITEMS,
        })

        const deletedItem = data?.deleteItem
        const updatedList = fetchItems?.filter(
          item => item?.id !== deletedItem?.id
        )

        return cache.writeQuery<FetchItems>({
          query: FETCH_ITEMS,
          data: {
            fetchItems: updatedList,
          },
        })
      },
    })

    if (data?.deleteItem && !error) {
      return router.push('/')
    }

    return null
  }

  const [addToCart, { loading: addCartLoading }] = useAddToCart()
  const handleAddToCart = async () =>
    await addToCart({
      variables: {
        id: item?.id,
      },
      update: (cache, { data }) => {
        const { fetchCart } = cache.readQuery<FetchCart>({
          query: FETCH_CART,
        })

        const addedItem = data?.addToCart

        return cache.writeQuery<FetchCart>({
          query: FETCH_CART,
          data: {
            fetchCart: [...fetchCart, addedItem],
          },
        })
      },
    })

  if (fetchLoading) return <Loader size="large" />

  const handleUserRedirect = (id: string) => {
    const href = '/user/[id]'
    return router.push(href, href.replace('[id]', `${id}`))
  }

  const renderActions = () => (
    <Fragment>
      {error && <ErrorMessage error={error} />}
      <Styles.ActionsContainer>
        <Button
          onClick={() => setShowModal(false)}
          type="button"
          disabled={deleteLoading}
        >
          No
        </Button>
        <Button onClick={handleDelete} type="button" disabled={deleteLoading}>
          {deleteLoading ? 'Deleting...' : 'Yes'}
        </Button>
      </Styles.ActionsContainer>
    </Fragment>
  )

  const renderOwnerButtons = () => (
    <Fragment>
      <Button
        onClick={() =>
          router.push({
            pathname: '/item/edit',
            query: `id=${item?.id}`,
          })
        }
        type="button"
        color="yellow"
      >
        Edit
      </Button>
      <Button onClick={() => setShowModal(true)} type="button" color="yellow">
        Delete
      </Button>
    </Fragment>
  )

  return (
    <Fragment>
      <Modal
        header="Confirm delete item?"
        content={`Are you sure you want to delete ${item?.name}?`}
        actions={renderActions()}
        displayModal={showModal}
        clickOutside={() => setShowModal(false)}
      />
      <ImageViewer
        images={item?.images}
        displayViewer={showViewer}
        closeViewer={() => setShowViewer(false)}
        selectedImage={selectedImage}
      />
      <Styles.Container>
        <Styles.ProductContainer>
          <Styles.ImageContainer>
            {item?.images.map(image => (
              <img
                src={image}
                alt="image"
                key={image}
                onClick={() => {
                  setSelectedImage(image)
                  setShowViewer(true)
                }}
              />
            ))}
          </Styles.ImageContainer>
          <Styles.DetailsContainer>
            <Styles.Name>{item?.name}</Styles.Name>
            <Styles.Description>{item?.description}</Styles.Description>
            <Styles.Price>{formatCurrency(item?.price)}</Styles.Price>
            <Styles.Created>
              Posted {formatTimeSince(item?.createdAt)}
              <Styles.User onClick={() => handleUserRedirect(item?.user?.id)}>
                By {item?.user?.username}
              </Styles.User>
            </Styles.Created>
            <Styles.ButtonsContainer>
              {user &&
                (isOwner ? (
                  renderOwnerButtons()
                ) : (
                  <Button
                    onClick={handleAddToCart}
                    type="button"
                    disabled={addCartLoading}
                  >
                    Add to Cart
                  </Button>
                ))}
            </Styles.ButtonsContainer>
          </Styles.DetailsContainer>
        </Styles.ProductContainer>
      </Styles.Container>
    </Fragment>
  )
}

export default Product
