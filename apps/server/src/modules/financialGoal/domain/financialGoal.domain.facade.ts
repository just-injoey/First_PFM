import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { FinancialGoal } from './financialGoal.model'

import { User } from '../../user/domain'

@Injectable()
export class FinancialGoalDomainFacade {
  constructor(
    @InjectRepository(FinancialGoal)
    private repository: Repository<FinancialGoal>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<FinancialGoal>): Promise<FinancialGoal> {
    return this.repository.save(values)
  }

  async update(
    item: FinancialGoal,
    values: Partial<FinancialGoal>,
  ): Promise<FinancialGoal> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: FinancialGoal): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<FinancialGoal> = {},
  ): Promise<FinancialGoal[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<FinancialGoal> = {},
  ): Promise<FinancialGoal> {
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
    queryOptions: RequestHelper.QueryOptions<FinancialGoal> = {},
  ): Promise<FinancialGoal[]> {
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
}
