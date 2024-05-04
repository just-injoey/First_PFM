import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { TaxBenefitDomainModule } from '../domain'
import { TaxBenefitController } from './taxBenefit.controller'

@Module({
  imports: [AuthenticationDomainModule, TaxBenefitDomainModule],
  controllers: [TaxBenefitController],
  providers: [],
})
export class TaxBenefitApplicationModule {}
