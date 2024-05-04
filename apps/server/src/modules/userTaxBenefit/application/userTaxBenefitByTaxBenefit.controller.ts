import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { UserTaxBenefitDomainFacade } from '@server/modules/userTaxBenefit/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { UserTaxBenefitApplicationEvent } from './userTaxBenefit.application.event'
import { UserTaxBenefitCreateDto } from './userTaxBenefit.dto'

import { TaxBenefitDomainFacade } from '../../taxBenefit/domain'

@Controller('/v1/taxBenefits')
export class UserTaxBenefitByTaxBenefitController {
  constructor(
    private taxBenefitDomainFacade: TaxBenefitDomainFacade,

    private userTaxBenefitDomainFacade: UserTaxBenefitDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/benefit/:benefitId/userTaxBenefits')
  async findManyBenefitId(
    @Param('benefitId') benefitId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.taxBenefitDomainFacade.findOneByIdOrFail(benefitId)

    const items = await this.userTaxBenefitDomainFacade.findManyByBenefit(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/benefit/:benefitId/userTaxBenefits')
  async createByBenefitId(
    @Param('benefitId') benefitId: string,
    @Body() body: UserTaxBenefitCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, benefitId }

    const item = await this.userTaxBenefitDomainFacade.create(valuesUpdated)

    await this.eventService.emit<UserTaxBenefitApplicationEvent.UserTaxBenefitCreated.Payload>(
      UserTaxBenefitApplicationEvent.UserTaxBenefitCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
