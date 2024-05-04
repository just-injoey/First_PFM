import { User } from '../user'

import { Category } from '../category'

export class Expense {
  id: string

  amount: number

  date: string

  description?: string

  userId: string

  user?: User

  categoryId: string

  category?: Category

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
