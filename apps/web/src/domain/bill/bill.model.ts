import { User } from '../user'

import { Category } from '../category'

export class Bill {
  id: string

  amountDue: number

  dueDate: string

  isPaid: boolean

  userId: string

  user?: User

  categoryId: string

  category?: Category

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
