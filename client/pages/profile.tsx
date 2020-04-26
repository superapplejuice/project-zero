import React from 'react'
import Error from 'next/error'

import { useUserContext } from 'context/user-context'

import UserInfo from 'components/user-info'

const Profile = () => {
  const { user } = useUserContext()

  if (!user?.id) {
    return (
      <Error statusCode={403} title="You're not allowed to view this page" />
    )
  }

  return <UserInfo user={user} />
}

export default Profile
