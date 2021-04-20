import { AddAccountRepository, LoadAccountByEmailRepository, LoadAccountByTokenRepository, UpdateAccessTokenRepository } from '@/data/protocols'

import faker from 'faker'

export class AddAccountRepositorySpy implements AddAccountRepository {
  result = true
  addAccountParams: AddAccountRepository.Params

  async add (data: AddAccountRepository.Params): Promise<AddAccountRepository.Result> {
    this.addAccountParams = data
    return Promise.resolve(this.result)
  }
}

export class LoadAccountByEmailRepositorySpy implements LoadAccountByEmailRepository {
  email: string
  result = {
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    password: faker.internet.password()
  }

  async loadByEmail (email: string): Promise<LoadAccountByEmailRepository.Result> {
    this.email = email
    return Promise.resolve(this.result)
  }
}

export class LoadAccountByTokenRepositorySpy implements LoadAccountByTokenRepository {
  accessToken: string
  role: string
  result = {
    id: faker.datatype.uuid()
  }

  async loadByToken (data: LoadAccountByTokenRepository.Params): Promise<LoadAccountByTokenRepository.Result> {
    const { accessToken, role } = data
    this.accessToken = accessToken
    this.role = role
    return Promise.resolve(this.result)
  }
}

export class UpdateAccessTokenRepositorySpy implements UpdateAccessTokenRepository {
  id: string
  token: string

  async updateAccessToken (id: string, token: string): Promise<void> {
    this.id = id
    this.token = token
    return Promise.resolve()
  }
}
