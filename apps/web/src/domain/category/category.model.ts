import { Expense } from '../expense'

import { Bill } from '../bill'

export class Category {
  id: string

  name: string

  type: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  expenses?: Expense[]

  bills?: Bill[]
}
