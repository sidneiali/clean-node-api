import { loginPath } from './paths'
import { badRequest, notFound, serverError, success, unauthorized } from './components'
import { errorSchema, loginParamsSchema, successSchema } from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'NodeJs Rest Api using TDD, Clean Architecture and Typescript',
    version: '1.0.0'
  },
  license: [{
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  }],
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }],
  paths: {
    '/login': loginPath
  },
  schemas: {
    success: successSchema,
    error: errorSchema,
    loginParams: loginParamsSchema
  },
  components: {
    badRequest,
    notFound,
    serverError,
    success,
    unauthorized
  }
}
