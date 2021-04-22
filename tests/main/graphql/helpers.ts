import resolvers from '@/main/graphql/resolvers'
import typeDefs from '@/main/graphql/types-defs'
import schemaDirectives from '@/main/graphql/directives'

import { ApolloServer } from 'apollo-server-express'

export const makeApolloServer = (): ApolloServer => new ApolloServer({
  resolvers,
  typeDefs,
  schemaDirectives
})
