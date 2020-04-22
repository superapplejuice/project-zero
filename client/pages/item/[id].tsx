import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'

import { useFetchItem } from 'resolvers/queries'
import { useDeleteItem } from 'resolvers/mutations'
import { formatCurrency, formatTimeSince } from 'lib/formatters'
import { useUserContext } from 'context/user-context'

import { Loader, Button, ErrorMessage } from 'components/core'
import Modal from 'components/modal'
import * as Styles from 'components/styles/[id]'

const Product = () => {
  const router = useRouter()
  const { id } = router.query
  const { user } = useUserContext()

  const [showModal, setShowModal] = useState(false)

  const { data, loading: fetchLoading } = useFetchItem({
    variables: { id: String(id) },
  })
  const [deleteItem, { loading: deleteLoading, error }] = useDeleteItem({
    refetchQueries: ['FetchItems'],
    awaitRefetchQueries: true,
  })

  if (fetchLoading) return <Loader size="large" />

  const isOwner = user?.username === data?.fetchItem?.user?.username

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

  return showModal ? (
    <Modal
      header="Confirm delete item?"
      content={`Are you sure you want to delete ${data?.fetchItem?.name}?`}
      actions={renderActions()}
      clickOutside={() => setShowModal(false)}
    />
  ) : (
    <Styles.Container>
      <Styles.ProductContainer>
        <Styles.ImageContainer>
          {data?.fetchItem?.images.map(image => (
            <img src={image} alt="image" key={image} />
          ))}
        </Styles.ImageContainer>
        <Styles.DetailsContainer>
          <Styles.Name>{data?.fetchItem?.name}</Styles.Name>
          <Styles.Description>
            {data?.fetchItem?.description}
          </Styles.Description>
          <Styles.Price>{formatCurrency(data?.fetchItem?.price)}</Styles.Price>
          <Styles.Created>
            Posted {formatTimeSince(data?.fetchItem?.createdAt)}
            <Styles.User>By {data?.fetchItem?.user?.username}</Styles.User>
          </Styles.Created>
          <Styles.ButtonsContainer>
            {user &&
              (isOwner ? (
                <Fragment>
                  <Button onClick={() => {}} type="button" color="yellow">
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
  )
}

export default Product
