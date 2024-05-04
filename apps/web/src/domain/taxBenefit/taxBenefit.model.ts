import { UserTaxBenefit } from '../userTaxBenefit'

export class TaxBenefit {
  id: string

  description: string

  eligibilityCriteria: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  userTaxBenefitsAsBenefit?: UserTaxBenefit[]
}
