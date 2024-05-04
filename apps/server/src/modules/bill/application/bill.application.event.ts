export namespace BillApplicationEvent {
  export namespace BillCreated {
    export const key = 'bill.application.bill.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
