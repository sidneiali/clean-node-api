import { adaptResolver } from '@/main/adapters'
import { makeloginController } from '@/main/factories'

export default {
  Query: {
    login: async (parent: any, args: any) => adaptResolver(makeloginController(), args)
  }
}
