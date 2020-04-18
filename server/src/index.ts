require('dotenv').config({ path: '.env' })

import { GraphQLServer, Options } from 'graphql-yoga'
import cookieParser from 'cookie-parser'

import * as resolvers from './resolvers'
import db from './lib/db'
import { attachCookie, setUser } from './middleware'

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
  context: req => ({ ...req, db }),
})

// populate req.cookies with a cookie object
server.express.use(cookieParser())

// attach cookies to req
server.express.use(attachCookie)

// set user to req
server.express.use(setUser)

const options: Options = {
  cors: { credentials: true, origin: process.env.CLIENT_ENDPOINT },
  playground: '/graphql',
}

server.start(options, ({ port }) =>
  // eslint-disable-next-line no-console
  console.log(`🚀 GraphQL Server running on http://localhost:${port}`)
)
