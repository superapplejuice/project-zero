import { createContext, useContext } from 'react'

import {
  FetchUser_fetchUser,
  FetchCurrentUser_fetchCurrentUser,
} from 'resolvers/queries/types'

type User = FetchUser_fetchUser | FetchCurrentUser_fetchCurrentUser

const UserContext = createContext<{ user: User }>(undefined)

export const useUserContext = () => useContext(UserContext)
export const UserProvider = UserContext.Provider
