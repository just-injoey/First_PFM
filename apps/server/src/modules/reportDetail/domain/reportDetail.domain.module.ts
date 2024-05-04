import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ReportDetailDomainFacade } from './reportDetail.domain.facade'
import { ReportDetail } from './reportDetail.model'

@Module({
  imports: [TypeOrmModule.forFeature([ReportDetail]), DatabaseHelperModule],
  providers: [ReportDetailDomainFacade, ReportDetailDomainFacade],
  exports: [ReportDetailDomainFacade],
})
export class ReportDetailDomainModule {}
