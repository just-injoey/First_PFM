import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Report } from './report.model'

export class ReportApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Report>,
  ): Promise<Report[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/reports${buildOptions}`)
  }

  static findOne(
    reportId: string,
    queryOptions?: ApiHelper.QueryOptions<Report>,
  ): Promise<Report> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/reports/${reportId}${buildOptions}`)
  }

  static createOne(values: Partial<Report>): Promise<Report> {
    return HttpService.api.post(`/v1/reports`, values)
  }

  static updateOne(reportId: string, values: Partial<Report>): Promise<Report> {
    return HttpService.api.patch(`/v1/reports/${reportId}`, values)
  }

  static deleteOne(reportId: string): Promise<void> {
    return HttpService.api.delete(`/v1/reports/${reportId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Report>,
  ): Promise<Report[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/reports${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Report>,
  ): Promise<Report> {
    return HttpService.api.post(`/v1/users/user/${userId}/reports`, values)
  }
}
