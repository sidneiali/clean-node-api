import { badRequest } from './bad-request'
import { forbidden } from './forbidden'
import { notFound } from './not-found'
import { serverError } from './server-error'
import { unauthorized } from './unauthorized'
import apiKeyAuth from '../paths/api-key-auth'

export default {
  securitySchemes: {
    apiKeyAuth
  },
  badRequest,
  forbidden,
  notFound,
  serverError,
  unauthorized
}
