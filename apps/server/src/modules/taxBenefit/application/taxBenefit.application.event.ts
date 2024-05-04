export namespace TaxBenefitApplicationEvent {
  export namespace TaxBenefitCreated {
    export const key = 'taxBenefit.application.taxBenefit.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
