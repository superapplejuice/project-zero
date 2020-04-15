import React from 'react'
import { useRouter } from 'next/router'

import { useFetchItem } from 'resolvers/queries'
import { formatCurrency, formatTimeSince } from 'lib/formatters'

import * as Styles from 'components/styles/[id]'

const Product = () => {
  const router = useRouter()
  const { id } = router.query

  const { data, loading } = useFetchItem({
    variables: { id: String(id) },
  })

  if (loading) return <p>Loading...</p>

  return (
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
            {formatTimeSince(data?.fetchItem?.createdAt)}
          </Styles.Created>
        </Styles.DetailsContainer>
      </Styles.ProductContainer>
    </Styles.Container>
  )
}

export default Product
