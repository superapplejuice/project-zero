import React from 'react'
import Link from 'next/link'

import { FetchItems_fetchItems } from 'resolvers/queries/types'

import * as Styles from './styles'

const ProductCard = ({ item }: { item: FetchItems_fetchItems }) => (
  <Link href={`/item/${item?.id}`}>
    <Styles.Container>
      <Styles.DetailsContainer>
        <Styles.Detail className="username">@superadmin01</Styles.Detail>
        <Styles.Detail className="create-ts">2 days ago</Styles.Detail>
      </Styles.DetailsContainer>
      <Styles.Image src={item?.images[0]} />
      <Styles.DetailsContainer>
        <Styles.Name>{item?.name}</Styles.Name>
        <Styles.Detail className="price">${item?.price}.00</Styles.Detail>
        <Styles.Detail className="description">
          {item?.description}
        </Styles.Detail>
      </Styles.DetailsContainer>
    </Styles.Container>
  </Link>
)

export default ProductCard
