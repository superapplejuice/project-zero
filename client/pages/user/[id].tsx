import React from 'react'
import Error from 'next/error'
import { useRouter } from 'next/router'

import { useFetchUser } from 'resolvers/queries'

import UserInfo from 'components/user-info'
import { Loader } from 'components/core'

const User = () => {
  const router = useRouter()
  const { id } = router.query

  const { data, loading } = useFetchUser({
    variables: { id: String(id) },
  })

  if (!loading && !data?.fetchUser) {
    return <Error statusCode={404} title="User does not exist" />
  }

  return loading ? <Loader size="large" /> : <UserInfo user={data?.fetchUser} />
}

export default User
