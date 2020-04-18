import { verify } from 'jsonwebtoken'
import { Response, NextFunction } from 'express'

import { Request } from '../utils/types'

const attachCookie = (req: Request, res: Response, next: NextFunction) => {
  if (req.cookies.token) {
    const { userId } = verify(req.cookies.token, process.env.APP_SECRET) as {
      userId: string
    }

    req.userId = userId
  }

  return next()
}

export default attachCookie
