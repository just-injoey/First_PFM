import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { BillDomainModule } from '../domain'
import { BillController } from './bill.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { BillByUserController } from './billByUser.controller'

import { CategoryDomainModule } from '../../../modules/category/domain'

import { BillByCategoryController } from './billByCategory.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    BillDomainModule,

    UserDomainModule,

    CategoryDomainModule,
  ],
  controllers: [BillController, BillByUserController, BillByCategoryController],
  providers: [],
})
export class BillApplicationModule {}
