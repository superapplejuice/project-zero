require('dotenv').config({ path: '.env' })

import { GraphQLServer, Options } from 'graphql-yoga'

import * as resolvers from './resolvers'
import { Prisma } from './generated/prisma'

const db = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false,
})

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
  context: req => ({ ...req, db }),
})

const options: Options = {
  cors: { credentials: true, origin: process.env.CLIENT_ENDPOINT },
  playground: '/graphql',
}

server.start(options, ({ port }) =>
  // eslint-disable-next-line no-console
  console.log(`🚀 GraphQL Server running on http://localhost:${port}`)
)
