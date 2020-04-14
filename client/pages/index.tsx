import React from 'react'

import { useFetchItems } from 'resolvers/queries'

import ProductCard from 'components/product-card'
import * as Styles from 'components/styles/home'

const Home = () => {
  const { data } = useFetchItems()

  return (
    <Styles.Container>
      <div>Home</div>
      <Styles.CardContainer>
        {data?.fetchItems?.map(item => (
          <ProductCard key={item?.id} item={item} />
        ))}
      </Styles.CardContainer>
    </Styles.Container>
  )
}

export default Home
