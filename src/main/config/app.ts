import setupMiddlewares from '@/main/config/middlewares'
import setupApolloServer from '@/main/config/apollo-server'
import setupRoutes from '@/main/config/routes'
import setupStaticFiles from '@/main/config/static-files'
import setupSwagger from '@/main/config/swagger'

import express from 'express'

const app = express()
setupApolloServer(app)
setupStaticFiles(app)
setupSwagger(app)
setupMiddlewares(app)
setupRoutes(app)
export default app
