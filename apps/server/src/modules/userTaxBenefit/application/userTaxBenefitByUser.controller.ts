import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { UserTaxBenefitDomainFacade } from '@server/modules/userTaxBenefit/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { UserTaxBenefitApplicationEvent } from './userTaxBenefit.application.event'
import { UserTaxBenefitCreateDto } from './userTaxBenefit.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class UserTaxBenefitByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private userTaxBenefitDomainFacade: UserTaxBenefitDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/userTaxBenefits')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.userTaxBenefitDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/userTaxBenefits')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: UserTaxBenefitCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

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
