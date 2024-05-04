import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Category as CategoryModel } from './category/category.model'

import { BankAccount as BankAccountModel } from './bankAccount/bankAccount.model'

import { Expense as ExpenseModel } from './expense/expense.model'

import { FinancialGoal as FinancialGoalModel } from './financialGoal/financialGoal.model'

import { Bill as BillModel } from './bill/bill.model'

import { TaxBenefit as TaxBenefitModel } from './taxBenefit/taxBenefit.model'

import { UserTaxBenefit as UserTaxBenefitModel } from './userTaxBenefit/userTaxBenefit.model'

import { Report as ReportModel } from './report/report.model'

import { ReportDetail as ReportDetailModel } from './reportDetail/reportDetail.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Category extends CategoryModel {}

  export class BankAccount extends BankAccountModel {}

  export class Expense extends ExpenseModel {}

  export class FinancialGoal extends FinancialGoalModel {}

  export class Bill extends BillModel {}

  export class TaxBenefit extends TaxBenefitModel {}

  export class UserTaxBenefit extends UserTaxBenefitModel {}

  export class Report extends ReportModel {}

  export class ReportDetail extends ReportDetailModel {}
}
