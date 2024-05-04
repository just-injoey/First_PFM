import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  UserTaxBenefit,
  UserTaxBenefitDomainFacade,
} from '@server/modules/userTaxBenefit/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { UserTaxBenefitApplicationEvent } from './userTaxBenefit.application.event'
import {
  UserTaxBenefitCreateDto,
  UserTaxBenefitUpdateDto,
} from './userTaxBenefit.dto'

@Controller('/v1/userTaxBenefits')
export class UserTaxBenefitController {
  constructor(
    private eventService: EventService,
    private userTaxBenefitDomainFacade: UserTaxBenefitDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.userTaxBenefitDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: UserTaxBenefitCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.userTaxBenefitDomainFacade.create(body)

    await this.eventService.emit<UserTaxBenefitApplicationEvent.UserTaxBenefitCreated.Payload>(
      UserTaxBenefitApplicationEvent.UserTaxBenefitCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:userTaxBenefitId')
  async findOne(
    @Param('userTaxBenefitId') userTaxBenefitId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.userTaxBenefitDomainFacade.findOneByIdOrFail(
      userTaxBenefitId,
      queryOptions,
    )

    return item
  }

  @Patch('/:userTaxBenefitId')
  async update(
    @Param('userTaxBenefitId') userTaxBenefitId: string,
    @Body() body: UserTaxBenefitUpdateDto,
  ) {
    const item =
      await this.userTaxBenefitDomainFacade.findOneByIdOrFail(userTaxBenefitId)

    const itemUpdated = await this.userTaxBenefitDomainFacade.update(
      item,
      body as Partial<UserTaxBenefit>,
    )
    return itemUpdated
  }

  @Delete('/:userTaxBenefitId')
  async delete(@Param('userTaxBenefitId') userTaxBenefitId: string) {
    const item =
      await this.userTaxBenefitDomainFacade.findOneByIdOrFail(userTaxBenefitId)

    await this.userTaxBenefitDomainFacade.delete(item)

    return item
  }
}
