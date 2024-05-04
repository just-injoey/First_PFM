import { Notification } from '../notification'

import { BankAccount } from '../bankAccount'

import { Expense } from '../expense'

import { FinancialGoal } from '../financialGoal'

import { Bill } from '../bill'

import { UserTaxBenefit } from '../userTaxBenefit'

import { Report } from '../report'

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string
  email: string
  status: UserStatus
  name: string
  pictureUrl: string
  password: string
  dateCreated: string
  dateUpdated: string
  notifications?: Notification[]

  bankAccounts?: BankAccount[]

  expenses?: Expense[]

  financialGoals?: FinancialGoal[]

  bills?: Bill[]

  userTaxBenefits?: UserTaxBenefit[]

  reports?: Report[]
}
