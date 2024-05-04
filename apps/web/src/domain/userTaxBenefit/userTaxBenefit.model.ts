import { User } from '../user'

import { TaxBenefit } from '../taxBenefit'

export class UserTaxBenefit {
  applicableYear: number

  userId: string

  user?: User

  benefitId: string

  benefit?: TaxBenefit

  id: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
