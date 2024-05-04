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
import { Bill, BillDomainFacade } from '@server/modules/bill/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { BillApplicationEvent } from './bill.application.event'
import { BillCreateDto, BillUpdateDto } from './bill.dto'

@Controller('/v1/bills')
export class BillController {
  constructor(
    private eventService: EventService,
    private billDomainFacade: BillDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.billDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: BillCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.billDomainFacade.create(body)

    await this.eventService.emit<BillApplicationEvent.BillCreated.Payload>(
      BillApplicationEvent.BillCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:billId')
  async findOne(@Param('billId') billId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.billDomainFacade.findOneByIdOrFail(
      billId,
      queryOptions,
    )

    return item
  }

  @Patch('/:billId')
  async update(@Param('billId') billId: string, @Body() body: BillUpdateDto) {
    const item = await this.billDomainFacade.findOneByIdOrFail(billId)

    const itemUpdated = await this.billDomainFacade.update(
      item,
      body as Partial<Bill>,
    )
    return itemUpdated
  }

  @Delete('/:billId')
  async delete(@Param('billId') billId: string) {
    const item = await this.billDomainFacade.findOneByIdOrFail(billId)

    await this.billDomainFacade.delete(item)

    return item
  }
}
