import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ReportDomainModule } from '../domain'
import { ReportController } from './report.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { ReportByUserController } from './reportByUser.controller'

@Module({
  imports: [AuthenticationDomainModule, ReportDomainModule, UserDomainModule],
  controllers: [ReportController, ReportByUserController],
  providers: [],
})
export class ReportApplicationModule {}
