import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ExpenseDomainFacade } from '@server/modules/expense/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ExpenseApplicationEvent } from './expense.application.event'
import { ExpenseCreateDto } from './expense.dto'

import { CategoryDomainFacade } from '../../category/domain'

@Controller('/v1/categorys')
export class ExpenseByCategoryController {
  constructor(
    private categoryDomainFacade: CategoryDomainFacade,

    private expenseDomainFacade: ExpenseDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/category/:categoryId/expenses')
  async findManyCategoryId(
    @Param('categoryId') categoryId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.categoryDomainFacade.findOneByIdOrFail(categoryId)

    const items = await this.expenseDomainFacade.findManyByCategory(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/category/:categoryId/expenses')
  async createByCategoryId(
    @Param('categoryId') categoryId: string,
    @Body() body: ExpenseCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, categoryId }

    const item = await this.expenseDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ExpenseApplicationEvent.ExpenseCreated.Payload>(
      ExpenseApplicationEvent.ExpenseCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
