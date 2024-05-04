import { User } from '../user'

import { ReportDetail } from '../reportDetail'

export class Report {
  id: string

  reportType: string

  generatedDate: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  reportDetails?: ReportDetail[]
}
