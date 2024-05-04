import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { FinancialGoalDomainModule } from '../domain'
import { FinancialGoalController } from './financialGoal.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { FinancialGoalByUserController } from './financialGoalByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    FinancialGoalDomainModule,

    UserDomainModule,
  ],
  controllers: [FinancialGoalController, FinancialGoalByUserController],
  providers: [],
})
export class FinancialGoalApplicationModule {}
