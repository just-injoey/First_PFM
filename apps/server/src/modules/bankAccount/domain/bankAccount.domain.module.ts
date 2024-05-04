import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { BankAccountDomainFacade } from './bankAccount.domain.facade'
import { BankAccount } from './bankAccount.model'

@Module({
  imports: [TypeOrmModule.forFeature([BankAccount]), DatabaseHelperModule],
  providers: [BankAccountDomainFacade, BankAccountDomainFacade],
  exports: [BankAccountDomainFacade],
})
export class BankAccountDomainModule {}
