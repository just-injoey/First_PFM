import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { CategoryApi } from './category/category.api'

import { BankAccountApi } from './bankAccount/bankAccount.api'

import { ExpenseApi } from './expense/expense.api'

import { FinancialGoalApi } from './financialGoal/financialGoal.api'

import { BillApi } from './bill/bill.api'

import { TaxBenefitApi } from './taxBenefit/taxBenefit.api'

import { UserTaxBenefitApi } from './userTaxBenefit/userTaxBenefit.api'

import { ReportApi } from './report/report.api'

import { ReportDetailApi } from './reportDetail/reportDetail.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Category extends CategoryApi {}

  export class BankAccount extends BankAccountApi {}

  export class Expense extends ExpenseApi {}

  export class FinancialGoal extends FinancialGoalApi {}

  export class Bill extends BillApi {}

  export class TaxBenefit extends TaxBenefitApi {}

  export class UserTaxBenefit extends UserTaxBenefitApi {}

  export class Report extends ReportApi {}

  export class ReportDetail extends ReportDetailApi {}
}
