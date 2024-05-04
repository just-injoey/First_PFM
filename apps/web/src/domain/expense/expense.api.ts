import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Expense } from './expense.model'

export class ExpenseApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Expense>,
  ): Promise<Expense[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/expenses${buildOptions}`)
  }

  static findOne(
    expenseId: string,
    queryOptions?: ApiHelper.QueryOptions<Expense>,
  ): Promise<Expense> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/expenses/${expenseId}${buildOptions}`)
  }

  static createOne(values: Partial<Expense>): Promise<Expense> {
    return HttpService.api.post(`/v1/expenses`, values)
  }

  static updateOne(
    expenseId: string,
    values: Partial<Expense>,
  ): Promise<Expense> {
    return HttpService.api.patch(`/v1/expenses/${expenseId}`, values)
  }

  static deleteOne(expenseId: string): Promise<void> {
    return HttpService.api.delete(`/v1/expenses/${expenseId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Expense>,
  ): Promise<Expense[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/expenses${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Expense>,
  ): Promise<Expense> {
    return HttpService.api.post(`/v1/users/user/${userId}/expenses`, values)
  }

  static findManyByCategoryId(
    categoryId: string,
    queryOptions?: ApiHelper.QueryOptions<Expense>,
  ): Promise<Expense[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/categorys/category/${categoryId}/expenses${buildOptions}`,
    )
  }

  static createOneByCategoryId(
    categoryId: string,
    values: Partial<Expense>,
  ): Promise<Expense> {
    return HttpService.api.post(
      `/v1/categorys/category/${categoryId}/expenses`,
      values,
    )
  }
}
