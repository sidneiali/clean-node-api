import { badRequest } from '@/main/docs/components/bad-request'
import { forbidden } from '@/main/docs/components/forbidden'
import { notFound } from '@/main/docs/components/not-found'
import { serverError } from '@/main/docs/components/server-error'
import { unauthorized } from '@/main/docs/components/unauthorized'
import apiKeyAuth from '@/main/docs/paths/api-key-auth'

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
