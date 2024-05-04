import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { UserTaxBenefitDomainFacade } from './userTaxBenefit.domain.facade'
import { UserTaxBenefit } from './userTaxBenefit.model'

@Module({
  imports: [TypeOrmModule.forFeature([UserTaxBenefit]), DatabaseHelperModule],
  providers: [UserTaxBenefitDomainFacade, UserTaxBenefitDomainFacade],
  exports: [UserTaxBenefitDomainFacade],
})
export class UserTaxBenefitDomainModule {}
