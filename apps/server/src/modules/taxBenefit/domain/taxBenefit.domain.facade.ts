import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { TaxBenefit } from './taxBenefit.model'

@Injectable()
export class TaxBenefitDomainFacade {
  constructor(
    @InjectRepository(TaxBenefit)
    private repository: Repository<TaxBenefit>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<TaxBenefit>): Promise<TaxBenefit> {
    return this.repository.save(values)
  }

  async update(
    item: TaxBenefit,
    values: Partial<TaxBenefit>,
  ): Promise<TaxBenefit> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: TaxBenefit): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<TaxBenefit> = {},
  ): Promise<TaxBenefit[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<TaxBenefit> = {},
  ): Promise<TaxBenefit> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }
}
