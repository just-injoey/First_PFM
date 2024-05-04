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
  TaxBenefit,
  TaxBenefitDomainFacade,
} from '@server/modules/taxBenefit/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { TaxBenefitApplicationEvent } from './taxBenefit.application.event'
import { TaxBenefitCreateDto, TaxBenefitUpdateDto } from './taxBenefit.dto'

@Controller('/v1/taxBenefits')
export class TaxBenefitController {
  constructor(
    private eventService: EventService,
    private taxBenefitDomainFacade: TaxBenefitDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.taxBenefitDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: TaxBenefitCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.taxBenefitDomainFacade.create(body)

    await this.eventService.emit<TaxBenefitApplicationEvent.TaxBenefitCreated.Payload>(
      TaxBenefitApplicationEvent.TaxBenefitCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:taxBenefitId')
  async findOne(
    @Param('taxBenefitId') taxBenefitId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.taxBenefitDomainFacade.findOneByIdOrFail(
      taxBenefitId,
      queryOptions,
    )

    return item
  }

  @Patch('/:taxBenefitId')
  async update(
    @Param('taxBenefitId') taxBenefitId: string,
    @Body() body: TaxBenefitUpdateDto,
  ) {
    const item =
      await this.taxBenefitDomainFacade.findOneByIdOrFail(taxBenefitId)

    const itemUpdated = await this.taxBenefitDomainFacade.update(
      item,
      body as Partial<TaxBenefit>,
    )
    return itemUpdated
  }

  @Delete('/:taxBenefitId')
  async delete(@Param('taxBenefitId') taxBenefitId: string) {
    const item =
      await this.taxBenefitDomainFacade.findOneByIdOrFail(taxBenefitId)

    await this.taxBenefitDomainFacade.delete(item)

    return item
  }
}
