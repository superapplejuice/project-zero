import React from 'react'

import { useFetchItems } from 'resolvers/queries'

import { Loader } from 'components/core'
import ProductCard from 'components/product-card'
import * as Styles from 'components/styles/home'

const Home = () => {
  const { data, loading } = useFetchItems()

  if (loading) return <Loader size="large" />

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
