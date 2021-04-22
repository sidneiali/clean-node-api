import { makeApolloServer } from '@/tests/main/graphql/helpers'
import { MongoHelper } from '@/infra/db'

import { ApolloServer, gql } from 'apollo-server-express'
import { createTestClient } from 'apollo-server-integration-testing'
import { Collection } from 'mongodb'
import { hash } from 'bcrypt'

let accountCollection: Collection
let apolloServer: ApolloServer

describe('Login GraphQL', () => {
  beforeAll(async () => {
    apolloServer = makeApolloServer()
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('Login Query', () => {
    const loginQuery = gql`
      query login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          accessToken
          name
        }
      }
    `

    test('Should return an Account on valid credentials', async () => {
      const password = await hash('any_password', 12)
      await accountCollection.insertOne({
        name: 'any_name',
        email: 'any_email@mail.com',
        password
      })
      const { query } = createTestClient({ apolloServer })
      const res: any = await query(loginQuery, {
        variables: {
          email: 'any_email@mail.com',
          password: 'any_password'
        }
      })
      expect(res.data.login.accessToken).toBeTruthy()
      expect(res.data.login.name).toBe('any_name')
    })

    test('Should return UnauthorizedError on invalid credentials', async () => {
      const { query } = createTestClient({ apolloServer })
      const res: any = await query(loginQuery, {
        variables: {
          email: 'any_email@mail.com',
          password: 'any_password'
        }
      })
      expect(res.data).toBeFalsy()
      expect(res.errors[0].message).toBe('Unauthorized')
    })
  })

  describe('SignUp Mutation', () => {
    const signUpMutation = gql`
      mutation signUp($name: String!, $email: String!, $password: String!, $passwordConfirmation: String!) {
        signUp(name:$name, email: $email, password: $password, passwordConfirmation: $passwordConfirmation) {
          accessToken
          name
        }
      }
    `

    test('Should return an Account on valid data', async () => {
      const { mutate } = createTestClient({ apolloServer })
      const res: any = await mutate(signUpMutation, {
        variables: {
          name: 'any_name',
          email: 'any_email@mail.com',
          password: 'any_password',
          passwordConfirmation: 'any_password'
        }
      })
      expect(res.data.signUp.accessToken).toBeTruthy()
      expect(res.data.signUp.name).toBe('any_name')
    })

    test('Should return EmailInUseError on invalid data', async () => {
      const password = await hash('any_password', 12)
      await accountCollection.insertOne({
        name: 'any_name',
        email: 'any_email@mail.com',
        password
      })
      const { mutate } = createTestClient({ apolloServer })
      const res: any = await mutate(signUpMutation, {
        variables: {
          name: 'any_name',
          email: 'any_email@mail.com',
          password: 'any_password',
          passwordConfirmation: 'any_password'
        }
      })
      expect(res.data).toBeFalsy()
      expect(res.errors[0].message).toBe('The received email is already in use')
    })
  })
})
