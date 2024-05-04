export namespace BankAccountApplicationEvent {
  export namespace BankAccountCreated {
    export const key = 'bankAccount.application.bankAccount.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
