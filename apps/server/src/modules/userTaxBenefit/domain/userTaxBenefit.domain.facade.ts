import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { UserTaxBenefit } from './userTaxBenefit.model'

import { User } from '../../user/domain'

import { TaxBenefit } from '../../taxBenefit/domain'

@Injectable()
export class UserTaxBenefitDomainFacade {
  constructor(
    @InjectRepository(UserTaxBenefit)
    private repository: Repository<UserTaxBenefit>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<UserTaxBenefit>): Promise<UserTaxBenefit> {
    return this.repository.save(values)
  }

  async update(
    item: UserTaxBenefit,
    values: Partial<UserTaxBenefit>,
  ): Promise<UserTaxBenefit> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: UserTaxBenefit): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<UserTaxBenefit> = {},
  ): Promise<UserTaxBenefit[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<UserTaxBenefit> = {},
  ): Promise<UserTaxBenefit> {
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

  async findManyByUser(
    item: User,
    queryOptions: RequestHelper.QueryOptions<UserTaxBenefit> = {},
  ): Promise<UserTaxBenefit[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('user')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        userId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByBenefit(
    item: TaxBenefit,
    queryOptions: RequestHelper.QueryOptions<UserTaxBenefit> = {},
  ): Promise<UserTaxBenefit[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('benefit')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        benefitId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
