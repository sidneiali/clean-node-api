import resolvers from '@/main/graphql/resolvers'
import typeDefs from '@/main/graphql/types-defs'

import { ApolloServer } from 'apollo-server-express'
import { Express } from 'express'

export default (app: Express): void => {
  const server = new ApolloServer({
    resolvers,
    typeDefs
  })
  server.applyMiddleware({ app })
}
