import { User } from '../user'

export class BankAccount {
  id: string

  accountName: string

  accountType: string

  balance: number

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
