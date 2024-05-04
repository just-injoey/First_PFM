import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { ReportDetail } from './reportDetail.model'

import { Report } from '../../report/domain'

@Injectable()
export class ReportDetailDomainFacade {
  constructor(
    @InjectRepository(ReportDetail)
    private repository: Repository<ReportDetail>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<ReportDetail>): Promise<ReportDetail> {
    return this.repository.save(values)
  }

  async update(
    item: ReportDetail,
    values: Partial<ReportDetail>,
  ): Promise<ReportDetail> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: ReportDetail): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<ReportDetail> = {},
  ): Promise<ReportDetail[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<ReportDetail> = {},
  ): Promise<ReportDetail> {
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

  async findManyByReport(
    item: Report,
    queryOptions: RequestHelper.QueryOptions<ReportDetail> = {},
  ): Promise<ReportDetail[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('report')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        reportId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
