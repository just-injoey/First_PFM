import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ReportDomainFacade } from '@server/modules/report/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ReportApplicationEvent } from './report.application.event'
import { ReportCreateDto } from './report.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class ReportByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private reportDomainFacade: ReportDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/reports')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.reportDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/reports')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: ReportCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.reportDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ReportApplicationEvent.ReportCreated.Payload>(
      ReportApplicationEvent.ReportCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
