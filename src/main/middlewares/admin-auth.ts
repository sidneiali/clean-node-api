import { adaptMiddleware } from '@/main/adapters/express-middleware-adapter'
import { makeAuthMiddleware } from '@/main/factories'

export const adminAuth = adaptMiddleware(makeAuthMiddleware('admin'))
