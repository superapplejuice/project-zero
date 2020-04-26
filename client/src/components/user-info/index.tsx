import React, { useState, useEffect } from 'react'

import {
  FetchItems_fetchItems,
  FetchUser_fetchUser,
} from 'resolvers/queries/types'

import { useFetchItems } from 'resolvers/queries'
import { formatTimeSince } from 'lib/formatters'

import ProductCard from 'components/product-card'
import { Loader } from 'components/core'
import * as Styles from './styles'

const UserInfo = ({ user }: { user: FetchUser_fetchUser }) => {
  const { data, loading } = useFetchItems({
    variables: { userId: user?.id },
  })

  const [userItems, setUserItems] = useState<FetchItems_fetchItems[]>([])

  useEffect(() => {
    setUserItems(data?.fetchItems)
  }, [data])

  const renderUserItems = () =>
    userItems?.length > 0 ? (
      userItems?.map(item => <ProductCard item={item} key={item?.id} />)
    ) : (
      <p>You have no items yet!</p>
    )

  return (
    <Styles.Container>
      <Styles.UserContainer>
        <h1 className="username">{user?.username}</h1>
        <p className="join-date">Joined {formatTimeSince(user?.createdAt)}</p>
      </Styles.UserContainer>
      <Styles.ItemsContainer>
        {loading ? <Loader size="large" /> : renderUserItems()}
      </Styles.ItemsContainer>
    </Styles.Container>
  )
}

export default UserInfo
