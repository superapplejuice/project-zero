import { createContext, useContext } from 'react'

import { FetchUser_fetchUser } from 'resolvers/queries/types'

const UserContext = createContext<{ user: FetchUser_fetchUser }>(undefined)

export const useUserContext = () => useContext(UserContext)
export const UserProvider = UserContext.Provider
