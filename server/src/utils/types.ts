import { Request as BaseRequest } from 'express'

import { User } from '../resolvers/types'

export interface Request extends BaseRequest {
  userId: string
  user: User
}
