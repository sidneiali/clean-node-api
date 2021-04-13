import { AuthenticationParams } from '@/data/usecases/account/authentication/db-authentication-protocols'
import { AccountModel } from '@/domain/models/account'
import { AddAccountParams } from '@/domain/usecases/account/add-account'

export const mockAuthentication = (): AuthenticationParams => ({
  email: 'any_email@mail.com',
  password: 'any_password'
})

export const mockAddAccountParams = (): AddAccountParams => Object.assign(
  {},
  mockAuthentication(),
  {
    name: 'any_name'
  }
)

export const mockAddAccountWithAccessTokenParams = (): AddAccountParams => Object.assign(
  {},
  mockAddAccountParams(),
  {
    accessToken: 'any_token'
  }
)

export const mockAddAccountWithRoleParams = (): AddAccountParams => Object.assign(
  {},
  mockAddAccountWithAccessTokenParams(),
  {
    role: 'admin'
  }
)

export const mockAccountModel = (): AccountModel => Object.assign(
  {},
  mockAddAccountParams(),
  {
    id: 'any_id'
  }
)
