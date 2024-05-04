import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { ReportDetail } from './reportDetail.model'

export class ReportDetailApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<ReportDetail>,
  ): Promise<ReportDetail[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/reportDetails${buildOptions}`)
  }

  static findOne(
    reportDetailId: string,
    queryOptions?: ApiHelper.QueryOptions<ReportDetail>,
  ): Promise<ReportDetail> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/reportDetails/${reportDetailId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<ReportDetail>): Promise<ReportDetail> {
    return HttpService.api.post(`/v1/reportDetails`, values)
  }

  static updateOne(
    reportDetailId: string,
    values: Partial<ReportDetail>,
  ): Promise<ReportDetail> {
    return HttpService.api.patch(`/v1/reportDetails/${reportDetailId}`, values)
  }

  static deleteOne(reportDetailId: string): Promise<void> {
    return HttpService.api.delete(`/v1/reportDetails/${reportDetailId}`)
  }

  static findManyByReportId(
    reportId: string,
    queryOptions?: ApiHelper.QueryOptions<ReportDetail>,
  ): Promise<ReportDetail[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/reports/report/${reportId}/reportDetails${buildOptions}`,
    )
  }

  static createOneByReportId(
    reportId: string,
    values: Partial<ReportDetail>,
  ): Promise<ReportDetail> {
    return HttpService.api.post(
      `/v1/reports/report/${reportId}/reportDetails`,
      values,
    )
  }
}
