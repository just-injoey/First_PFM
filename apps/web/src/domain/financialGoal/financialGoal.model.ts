import { User } from '../user'

export class FinancialGoal {
  id: string

  targetAmount: number

  currentAmount: number

  deadline: string

  description?: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
