require('dotenv').config({ path: '.env' })

import { GraphQLServer, Options } from 'graphql-yoga'
import cookieParser from 'cookie-parser'
import { verify } from 'jsonwebtoken'

import { Request, Response } from './utils/types'
import * as resolvers from './resolvers'
import db from './lib/db'

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
  context: req => ({ ...req, db }),
})

// populate req.cookies with a cookie object
server.express.use(cookieParser())

// decode JWT + attach user.id to request headers
server.express.use((req: Request, res: Response, next) => {
  if (req.cookies.token) {
    const { userId } = verify(req.cookies.token, process.env.APP_SECRET) as {
      userId: string
    }

    req.userId = userId
  }

  return next()
})

// verify user.id on every request
server.express.use(async (req: Request, res: Response, next) => {
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
})

const options: Options = {
  cors: { credentials: true, origin: process.env.CLIENT_ENDPOINT },
  playground: '/graphql',
}

server.start(options, ({ port }) =>
  // eslint-disable-next-line no-console
  console.log(`🚀 GraphQL Server running on http://localhost:${port}`)
)
