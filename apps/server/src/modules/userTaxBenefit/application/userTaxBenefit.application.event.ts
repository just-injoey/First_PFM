export namespace UserTaxBenefitApplicationEvent {
  export namespace UserTaxBenefitCreated {
    export const key = 'userTaxBenefit.application.userTaxBenefit.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
