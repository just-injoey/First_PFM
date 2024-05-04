import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { BillDomainFacade } from './bill.domain.facade'
import { Bill } from './bill.model'

@Module({
  imports: [TypeOrmModule.forFeature([Bill]), DatabaseHelperModule],
  providers: [BillDomainFacade, BillDomainFacade],
  exports: [BillDomainFacade],
})
export class BillDomainModule {}
