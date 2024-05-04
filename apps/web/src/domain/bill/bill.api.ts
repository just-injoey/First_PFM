import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Bill } from './bill.model'

export class BillApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Bill>,
  ): Promise<Bill[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/bills${buildOptions}`)
  }

  static findOne(
    billId: string,
    queryOptions?: ApiHelper.QueryOptions<Bill>,
  ): Promise<Bill> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/bills/${billId}${buildOptions}`)
  }

  static createOne(values: Partial<Bill>): Promise<Bill> {
    return HttpService.api.post(`/v1/bills`, values)
  }

  static updateOne(billId: string, values: Partial<Bill>): Promise<Bill> {
    return HttpService.api.patch(`/v1/bills/${billId}`, values)
  }

  static deleteOne(billId: string): Promise<void> {
    return HttpService.api.delete(`/v1/bills/${billId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Bill>,
  ): Promise<Bill[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/users/user/${userId}/bills${buildOptions}`)
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Bill>,
  ): Promise<Bill> {
    return HttpService.api.post(`/v1/users/user/${userId}/bills`, values)
  }

  static findManyByCategoryId(
    categoryId: string,
    queryOptions?: ApiHelper.QueryOptions<Bill>,
  ): Promise<Bill[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/categorys/category/${categoryId}/bills${buildOptions}`,
    )
  }

  static createOneByCategoryId(
    categoryId: string,
    values: Partial<Bill>,
  ): Promise<Bill> {
    return HttpService.api.post(
      `/v1/categorys/category/${categoryId}/bills`,
      values,
    )
  }
}
