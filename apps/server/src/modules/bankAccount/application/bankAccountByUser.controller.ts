import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { BankAccountDomainFacade } from '@server/modules/bankAccount/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { BankAccountApplicationEvent } from './bankAccount.application.event'
import { BankAccountCreateDto } from './bankAccount.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class BankAccountByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private bankAccountDomainFacade: BankAccountDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/bankAccounts')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.bankAccountDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/bankAccounts')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: BankAccountCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.bankAccountDomainFacade.create(valuesUpdated)

    await this.eventService.emit<BankAccountApplicationEvent.BankAccountCreated.Payload>(
      BankAccountApplicationEvent.BankAccountCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
