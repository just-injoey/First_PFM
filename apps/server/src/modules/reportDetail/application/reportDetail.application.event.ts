export namespace ReportDetailApplicationEvent {
  export namespace ReportDetailCreated {
    export const key = 'reportDetail.application.reportDetail.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
