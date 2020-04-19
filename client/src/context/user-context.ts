import { createContext, useContext } from 'react'

import { FetchUser_fetchUser } from 'resolvers/queries/types'

type UserContext = {
  user: FetchUser_fetchUser
  loadingUser: boolean
}

const UserContext = createContext<UserContext>(undefined)

export const useUserContext = () => useContext(UserContext)
export const UserProvider = UserContext.Provider
