import { Response, NextFunction } from 'express'

import { Request } from '../utils/types'
import db from '../lib/db'

const setUser = async (req: Request, res: Response, next: NextFunction) => {
  // skip if no req.userId
  if (!req.userId) return next()

  // fetch user
  const user = await db.query.user(
    { where: { id: req.userId } },
    `{id, username, email}`
  )

  // set user to req.user
  req.user = user

  return next()
}

export default setUser
