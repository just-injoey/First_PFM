import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { BillDomainFacade } from '@server/modules/bill/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { BillApplicationEvent } from './bill.application.event'
import { BillCreateDto } from './bill.dto'

import { CategoryDomainFacade } from '../../category/domain'

@Controller('/v1/categorys')
export class BillByCategoryController {
  constructor(
    private categoryDomainFacade: CategoryDomainFacade,

    private billDomainFacade: BillDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/category/:categoryId/bills')
  async findManyCategoryId(
    @Param('categoryId') categoryId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.categoryDomainFacade.findOneByIdOrFail(categoryId)

    const items = await this.billDomainFacade.findManyByCategory(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/category/:categoryId/bills')
  async createByCategoryId(
    @Param('categoryId') categoryId: string,
    @Body() body: BillCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, categoryId }

    const item = await this.billDomainFacade.create(valuesUpdated)

    await this.eventService.emit<BillApplicationEvent.BillCreated.Payload>(
      BillApplicationEvent.BillCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
