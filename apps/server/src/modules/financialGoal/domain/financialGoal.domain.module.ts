import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { FinancialGoalDomainFacade } from './financialGoal.domain.facade'
import { FinancialGoal } from './financialGoal.model'

@Module({
  imports: [TypeOrmModule.forFeature([FinancialGoal]), DatabaseHelperModule],
  providers: [FinancialGoalDomainFacade, FinancialGoalDomainFacade],
  exports: [FinancialGoalDomainFacade],
})
export class FinancialGoalDomainModule {}
