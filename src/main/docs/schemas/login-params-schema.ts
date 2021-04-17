export const loginParamsSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'string'
    },
    password: {
      type: 'string'
    }
  },
  example: {
    email: 'sidnei@test.com',
    password: 'test'
  },
  required: ['email', 'password']
}
