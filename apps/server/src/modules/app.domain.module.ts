import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { CategoryDomainModule } from './category/domain'

import { BankAccountDomainModule } from './bankAccount/domain'

import { ExpenseDomainModule } from './expense/domain'

import { FinancialGoalDomainModule } from './financialGoal/domain'

import { BillDomainModule } from './bill/domain'

import { TaxBenefitDomainModule } from './taxBenefit/domain'

import { UserTaxBenefitDomainModule } from './userTaxBenefit/domain'

import { ReportDomainModule } from './report/domain'

import { ReportDetailDomainModule } from './reportDetail/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    CategoryDomainModule,

    BankAccountDomainModule,

    ExpenseDomainModule,

    FinancialGoalDomainModule,

    BillDomainModule,

    TaxBenefitDomainModule,

    UserTaxBenefitDomainModule,

    ReportDomainModule,

    ReportDetailDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
