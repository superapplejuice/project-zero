import {
  FetchUser_fetchUser,
  FetchCurrentUser_fetchCurrentUser,
} from 'resolvers/queries/types'

export type Props = {
  user: FetchUser_fetchUser | FetchCurrentUser_fetchCurrentUser
}
