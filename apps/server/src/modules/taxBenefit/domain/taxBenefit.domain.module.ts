import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { TaxBenefitDomainFacade } from './taxBenefit.domain.facade'
import { TaxBenefit } from './taxBenefit.model'

@Module({
  imports: [TypeOrmModule.forFeature([TaxBenefit]), DatabaseHelperModule],
  providers: [TaxBenefitDomainFacade, TaxBenefitDomainFacade],
  exports: [TaxBenefitDomainFacade],
})
export class TaxBenefitDomainModule {}
