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
  ReportDetail,
  ReportDetailDomainFacade,
} from '@server/modules/reportDetail/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ReportDetailApplicationEvent } from './reportDetail.application.event'
import {
  ReportDetailCreateDto,
  ReportDetailUpdateDto,
} from './reportDetail.dto'

@Controller('/v1/reportDetails')
export class ReportDetailController {
  constructor(
    private eventService: EventService,
    private reportDetailDomainFacade: ReportDetailDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.reportDetailDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: ReportDetailCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.reportDetailDomainFacade.create(body)

    await this.eventService.emit<ReportDetailApplicationEvent.ReportDetailCreated.Payload>(
      ReportDetailApplicationEvent.ReportDetailCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:reportDetailId')
  async findOne(
    @Param('reportDetailId') reportDetailId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.reportDetailDomainFacade.findOneByIdOrFail(
      reportDetailId,
      queryOptions,
    )

    return item
  }

  @Patch('/:reportDetailId')
  async update(
    @Param('reportDetailId') reportDetailId: string,
    @Body() body: ReportDetailUpdateDto,
  ) {
    const item =
      await this.reportDetailDomainFacade.findOneByIdOrFail(reportDetailId)

    const itemUpdated = await this.reportDetailDomainFacade.update(
      item,
      body as Partial<ReportDetail>,
    )
    return itemUpdated
  }

  @Delete('/:reportDetailId')
  async delete(@Param('reportDetailId') reportDetailId: string) {
    const item =
      await this.reportDetailDomainFacade.findOneByIdOrFail(reportDetailId)

    await this.reportDetailDomainFacade.delete(item)

    return item
  }
}
