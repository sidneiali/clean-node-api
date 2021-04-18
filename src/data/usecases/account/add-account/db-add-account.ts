import { AccountModel, AddAccount, AddAccountParams, Hasher, AddAccountRepository, LoadAccountByEmailRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly hahser: Hasher,
    private readonly addAccountRepository: AddAccountRepository,
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  ) {}

  async add (data: AddAccountParams): Promise<AccountModel> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(data.email)
    if (!account) {
      const hashedPassword = await this.hahser.hash(data.password)
      const newAccount = await this.addAccountRepository.add(Object.assign({}, data, { password: hashedPassword }))
      return newAccount
    }
    return null
  }
}
