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
  BankAccount,
  BankAccountDomainFacade,
} from '@server/modules/bankAccount/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { BankAccountApplicationEvent } from './bankAccount.application.event'
import { BankAccountCreateDto, BankAccountUpdateDto } from './bankAccount.dto'

@Controller('/v1/bankAccounts')
export class BankAccountController {
  constructor(
    private eventService: EventService,
    private bankAccountDomainFacade: BankAccountDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.bankAccountDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: BankAccountCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.bankAccountDomainFacade.create(body)

    await this.eventService.emit<BankAccountApplicationEvent.BankAccountCreated.Payload>(
      BankAccountApplicationEvent.BankAccountCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:bankAccountId')
  async findOne(
    @Param('bankAccountId') bankAccountId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.bankAccountDomainFacade.findOneByIdOrFail(
      bankAccountId,
      queryOptions,
    )

    return item
  }

  @Patch('/:bankAccountId')
  async update(
    @Param('bankAccountId') bankAccountId: string,
    @Body() body: BankAccountUpdateDto,
  ) {
    const item =
      await this.bankAccountDomainFacade.findOneByIdOrFail(bankAccountId)

    const itemUpdated = await this.bankAccountDomainFacade.update(
      item,
      body as Partial<BankAccount>,
    )
    return itemUpdated
  }

  @Delete('/:bankAccountId')
  async delete(@Param('bankAccountId') bankAccountId: string) {
    const item =
      await this.bankAccountDomainFacade.findOneByIdOrFail(bankAccountId)

    await this.bankAccountDomainFacade.delete(item)

    return item
  }
}
