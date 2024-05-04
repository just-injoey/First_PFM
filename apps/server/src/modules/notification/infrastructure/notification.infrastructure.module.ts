import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationCategorySubscriber } from './subscribers/notification.category.subscriber'

import { NotificationBankAccountSubscriber } from './subscribers/notification.bankAccount.subscriber'

import { NotificationExpenseSubscriber } from './subscribers/notification.expense.subscriber'

import { NotificationFinancialGoalSubscriber } from './subscribers/notification.financialGoal.subscriber'

import { NotificationBillSubscriber } from './subscribers/notification.bill.subscriber'

import { NotificationTaxBenefitSubscriber } from './subscribers/notification.taxBenefit.subscriber'

import { NotificationUserTaxBenefitSubscriber } from './subscribers/notification.userTaxBenefit.subscriber'

import { NotificationReportSubscriber } from './subscribers/notification.report.subscriber'

import { NotificationReportDetailSubscriber } from './subscribers/notification.reportDetail.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationCategorySubscriber,

    NotificationBankAccountSubscriber,

    NotificationExpenseSubscriber,

    NotificationFinancialGoalSubscriber,

    NotificationBillSubscriber,

    NotificationTaxBenefitSubscriber,

    NotificationUserTaxBenefitSubscriber,

    NotificationReportSubscriber,

    NotificationReportDetailSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
