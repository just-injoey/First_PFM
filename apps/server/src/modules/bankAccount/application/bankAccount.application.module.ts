import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { BankAccountDomainModule } from '../domain'
import { BankAccountController } from './bankAccount.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { BankAccountByUserController } from './bankAccountByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    BankAccountDomainModule,

    UserDomainModule,
  ],
  controllers: [BankAccountController, BankAccountByUserController],
  providers: [],
})
export class BankAccountApplicationModule {}
