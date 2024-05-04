import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ReportDetailDomainModule } from '../domain'
import { ReportDetailController } from './reportDetail.controller'

import { ReportDomainModule } from '../../../modules/report/domain'

import { ReportDetailByReportController } from './reportDetailByReport.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ReportDetailDomainModule,

    ReportDomainModule,
  ],
  controllers: [ReportDetailController, ReportDetailByReportController],
  providers: [],
})
export class ReportDetailApplicationModule {}
