export const accountSchema = {
  type: 'object',
  properties: {
    accessToken: {
      type: 'string'
    }
  },
  example: {
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwN2IxNjI3OTIxM2NmMjFhOGJmZGJkNyIsImlhdCI6MTYxODY4MTExMn0.BN4XAEIfA1iP5K9bnTFEqCW87LzO6toJxbW8avQnH2Y'
  },
  required: ['accessToken']
}
