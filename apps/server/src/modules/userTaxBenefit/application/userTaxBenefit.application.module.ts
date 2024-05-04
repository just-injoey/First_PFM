import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { UserTaxBenefitDomainModule } from '../domain'
import { UserTaxBenefitController } from './userTaxBenefit.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { UserTaxBenefitByUserController } from './userTaxBenefitByUser.controller'

import { TaxBenefitDomainModule } from '../../../modules/taxBenefit/domain'

import { UserTaxBenefitByTaxBenefitController } from './userTaxBenefitByTaxBenefit.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    UserTaxBenefitDomainModule,

    UserDomainModule,

    TaxBenefitDomainModule,
  ],
  controllers: [
    UserTaxBenefitController,

    UserTaxBenefitByUserController,

    UserTaxBenefitByTaxBenefitController,
  ],
  providers: [],
})
export class UserTaxBenefitApplicationModule {}
