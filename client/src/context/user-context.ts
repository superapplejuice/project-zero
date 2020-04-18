import { createContext, useContext } from 'react'

import { FetchUser } from 'resolvers/queries/types'

const UserContext = createContext<FetchUser>(undefined)

export const useUserContext = () => useContext(UserContext)
export const UserProvider = UserContext.Provider
