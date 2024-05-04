import { Report } from '../report'

export class ReportDetail {
  id: string

  detailDescription: string

  value: number

  reportId: string

  report?: Report

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
