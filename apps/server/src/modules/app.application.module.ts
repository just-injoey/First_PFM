import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { CategoryApplicationModule } from './category/application'

import { BankAccountApplicationModule } from './bankAccount/application'

import { ExpenseApplicationModule } from './expense/application'

import { FinancialGoalApplicationModule } from './financialGoal/application'

import { BillApplicationModule } from './bill/application'

import { TaxBenefitApplicationModule } from './taxBenefit/application'

import { UserTaxBenefitApplicationModule } from './userTaxBenefit/application'

import { ReportApplicationModule } from './report/application'

import { ReportDetailApplicationModule } from './reportDetail/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,

    CategoryApplicationModule,

    BankAccountApplicationModule,

    ExpenseApplicationModule,

    FinancialGoalApplicationModule,

    BillApplicationModule,

    TaxBenefitApplicationModule,

    UserTaxBenefitApplicationModule,

    ReportApplicationModule,

    ReportDetailApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
