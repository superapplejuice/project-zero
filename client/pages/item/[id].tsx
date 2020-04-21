import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'

import { useFetchItem } from 'resolvers/queries'
import { formatCurrency, formatTimeSince } from 'lib/formatters'
import { useUserContext } from 'context/user-context'

import { Loader, Button } from 'components/core'
import Modal from 'components/modal'
import * as Styles from 'components/styles/[id]'

const Product = () => {
  const router = useRouter()
  const { id } = router.query

  const { data, loading } = useFetchItem({
    variables: { id: String(id) },
  })
  const [showModal, setShowModal] = useState(false)

  if (loading) return <Loader size="large" />

  const { user } = useUserContext()
  const isOwner = user?.username === data?.fetchItem?.user?.username

  return showModal ? (
    <Modal
      header="Delete Item"
      content={`Are you sure you want to delete ${data?.fetchItem?.name}?`}
      buttonMain="Yes"
      mainClick={() => alert('Deleted item!')}
      buttonSecondary="No"
      secondaryClick={() => setShowModal(false)}
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
