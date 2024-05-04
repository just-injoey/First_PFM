import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ReportDetailDomainFacade } from '@server/modules/reportDetail/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ReportDetailApplicationEvent } from './reportDetail.application.event'
import { ReportDetailCreateDto } from './reportDetail.dto'

import { ReportDomainFacade } from '../../report/domain'

@Controller('/v1/reports')
export class ReportDetailByReportController {
  constructor(
    private reportDomainFacade: ReportDomainFacade,

    private reportDetailDomainFacade: ReportDetailDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/report/:reportId/reportDetails')
  async findManyReportId(
    @Param('reportId') reportId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.reportDomainFacade.findOneByIdOrFail(reportId)

    const items = await this.reportDetailDomainFacade.findManyByReport(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/report/:reportId/reportDetails')
  async createByReportId(
    @Param('reportId') reportId: string,
    @Body() body: ReportDetailCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, reportId }

    const item = await this.reportDetailDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ReportDetailApplicationEvent.ReportDetailCreated.Payload>(
      ReportDetailApplicationEvent.ReportDetailCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
