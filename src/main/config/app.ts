import SetupMiddlewares from './middlewares'
import SetupRoutes from './routes'
import express from 'express'

const app = express()
SetupMiddlewares(app)
SetupRoutes(app)
export default app
