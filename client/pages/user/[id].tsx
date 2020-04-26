import React from 'react'
import Error from 'next/error'
import { useRouter } from 'next/router'

import { useFetchUser } from 'resolvers/queries'

import UserInfo from 'components/user-info'

const User = () => {
  const router = useRouter()
  const { id } = router.query

  const { data } = useFetchUser({
    variables: { id: String(id) },
  })

  if (!data?.fetchUser) {
    return <Error statusCode={404} title="User does not exist" />
  }

  return <UserInfo user={data?.fetchUser} />
}

export default User
