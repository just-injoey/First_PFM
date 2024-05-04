import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ExpenseDomainModule } from '../domain'
import { ExpenseController } from './expense.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { ExpenseByUserController } from './expenseByUser.controller'

import { CategoryDomainModule } from '../../../modules/category/domain'

import { ExpenseByCategoryController } from './expenseByCategory.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ExpenseDomainModule,

    UserDomainModule,

    CategoryDomainModule,
  ],
  controllers: [
    ExpenseController,

    ExpenseByUserController,

    ExpenseByCategoryController,
  ],
  providers: [],
})
export class ExpenseApplicationModule {}
