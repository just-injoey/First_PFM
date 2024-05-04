import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { FinancialGoal } from './financialGoal.model'

export class FinancialGoalApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<FinancialGoal>,
  ): Promise<FinancialGoal[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/financialGoals${buildOptions}`)
  }

  static findOne(
    financialGoalId: string,
    queryOptions?: ApiHelper.QueryOptions<FinancialGoal>,
  ): Promise<FinancialGoal> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/financialGoals/${financialGoalId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<FinancialGoal>): Promise<FinancialGoal> {
    return HttpService.api.post(`/v1/financialGoals`, values)
  }

  static updateOne(
    financialGoalId: string,
    values: Partial<FinancialGoal>,
  ): Promise<FinancialGoal> {
    return HttpService.api.patch(
      `/v1/financialGoals/${financialGoalId}`,
      values,
    )
  }

  static deleteOne(financialGoalId: string): Promise<void> {
    return HttpService.api.delete(`/v1/financialGoals/${financialGoalId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<FinancialGoal>,
  ): Promise<FinancialGoal[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/financialGoals${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<FinancialGoal>,
  ): Promise<FinancialGoal> {
    return HttpService.api.post(
      `/v1/users/user/${userId}/financialGoals`,
      values,
    )
  }
}
