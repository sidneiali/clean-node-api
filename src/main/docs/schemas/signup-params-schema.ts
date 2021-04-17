export const signUpParamsSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    passwordConfirmation: {
      type: 'string'
    }
  },
  example: {
    name: 'sidnei',
    email: 'sidnei@test.com',
    password: 'test',
    passwordConfirmation: 'test'
  },
  required: ['name', 'email', 'password', 'passwordConfirmation']
}
