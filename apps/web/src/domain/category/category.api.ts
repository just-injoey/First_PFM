import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Category } from './category.model'

export class CategoryApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Category>,
  ): Promise<Category[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/categorys${buildOptions}`)
  }

  static findOne(
    categoryId: string,
    queryOptions?: ApiHelper.QueryOptions<Category>,
  ): Promise<Category> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/categorys/${categoryId}${buildOptions}`)
  }

  static createOne(values: Partial<Category>): Promise<Category> {
    return HttpService.api.post(`/v1/categorys`, values)
  }

  static updateOne(
    categoryId: string,
    values: Partial<Category>,
  ): Promise<Category> {
    return HttpService.api.patch(`/v1/categorys/${categoryId}`, values)
  }

  static deleteOne(categoryId: string): Promise<void> {
    return HttpService.api.delete(`/v1/categorys/${categoryId}`)
  }
}
