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
  FinancialGoal,
  FinancialGoalDomainFacade,
} from '@server/modules/financialGoal/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { FinancialGoalApplicationEvent } from './financialGoal.application.event'
import {
  FinancialGoalCreateDto,
  FinancialGoalUpdateDto,
} from './financialGoal.dto'

@Controller('/v1/financialGoals')
export class FinancialGoalController {
  constructor(
    private eventService: EventService,
    private financialGoalDomainFacade: FinancialGoalDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.financialGoalDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: FinancialGoalCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.financialGoalDomainFacade.create(body)

    await this.eventService.emit<FinancialGoalApplicationEvent.FinancialGoalCreated.Payload>(
      FinancialGoalApplicationEvent.FinancialGoalCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:financialGoalId')
  async findOne(
    @Param('financialGoalId') financialGoalId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.financialGoalDomainFacade.findOneByIdOrFail(
      financialGoalId,
      queryOptions,
    )

    return item
  }

  @Patch('/:financialGoalId')
  async update(
    @Param('financialGoalId') financialGoalId: string,
    @Body() body: FinancialGoalUpdateDto,
  ) {
    const item =
      await this.financialGoalDomainFacade.findOneByIdOrFail(financialGoalId)

    const itemUpdated = await this.financialGoalDomainFacade.update(
      item,
      body as Partial<FinancialGoal>,
    )
    return itemUpdated
  }

  @Delete('/:financialGoalId')
  async delete(@Param('financialGoalId') financialGoalId: string) {
    const item =
      await this.financialGoalDomainFacade.findOneByIdOrFail(financialGoalId)

    await this.financialGoalDomainFacade.delete(item)

    return item
  }
}
