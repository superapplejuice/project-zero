import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'

import { useFetchItem } from 'resolvers/queries'
import { useDeleteItem } from 'resolvers/mutations'
import { formatCurrency, formatTimeSince } from 'lib/formatters'
import { useUserContext } from 'context/user-context'

import { Loader, Button, ErrorMessage } from 'components/core'
import Modal from 'components/modal'
import ImageViewer from 'components/image-viewer'
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

  const [deleteItem, { loading: deleteLoading, error }] = useDeleteItem({
    refetchQueries: ['FetchItems'],
    awaitRefetchQueries: true,
  })

  if (fetchLoading) return <Loader size="large" />

  const isOwner = user?.username === item?.user?.username

  const handleDelete = async () => {
    const { data } = await deleteItem({
      variables: { id: String(id) },
    })

    if (!data?.deleteItem?.error && !error) {
      return router.push('/')
    }

    return null
  }

  const renderActions = () => (
    <Fragment>
      {error && <ErrorMessage error={error} />}
      <Styles.ActionsContainer>
        <Button onClick={() => setShowModal(false)} type="button">
          No
        </Button>
        <Button onClick={handleDelete} type="button" disabled={deleteLoading}>
          {deleteLoading ? 'Deleting...' : 'Yes'}
        </Button>
      </Styles.ActionsContainer>
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
              <Styles.User>By {item?.user?.username}</Styles.User>
            </Styles.Created>
            <Styles.ButtonsContainer>
              {user &&
                (isOwner ? (
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
                    <Button
                      onClick={() => setShowModal(true)}
                      type="button"
                      color="yellow"
                    >
                      Delete
                    </Button>
                  </Fragment>
                ) : (
                  <Button onClick={() => {}} type="button">
                    Buy
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
