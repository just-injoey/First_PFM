import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { UserTaxBenefit } from './userTaxBenefit.model'

export class UserTaxBenefitApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<UserTaxBenefit>,
  ): Promise<UserTaxBenefit[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/userTaxBenefits${buildOptions}`)
  }

  static findOne(
    userTaxBenefitId: string,
    queryOptions?: ApiHelper.QueryOptions<UserTaxBenefit>,
  ): Promise<UserTaxBenefit> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/userTaxBenefits/${userTaxBenefitId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<UserTaxBenefit>): Promise<UserTaxBenefit> {
    return HttpService.api.post(`/v1/userTaxBenefits`, values)
  }

  static updateOne(
    userTaxBenefitId: string,
    values: Partial<UserTaxBenefit>,
  ): Promise<UserTaxBenefit> {
    return HttpService.api.patch(
      `/v1/userTaxBenefits/${userTaxBenefitId}`,
      values,
    )
  }

  static deleteOne(userTaxBenefitId: string): Promise<void> {
    return HttpService.api.delete(`/v1/userTaxBenefits/${userTaxBenefitId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<UserTaxBenefit>,
  ): Promise<UserTaxBenefit[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/userTaxBenefits${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<UserTaxBenefit>,
  ): Promise<UserTaxBenefit> {
    return HttpService.api.post(
      `/v1/users/user/${userId}/userTaxBenefits`,
      values,
    )
  }

  static findManyByBenefitId(
    benefitId: string,
    queryOptions?: ApiHelper.QueryOptions<UserTaxBenefit>,
  ): Promise<UserTaxBenefit[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/taxBenefits/benefit/${benefitId}/userTaxBenefits${buildOptions}`,
    )
  }

  static createOneByBenefitId(
    benefitId: string,
    values: Partial<UserTaxBenefit>,
  ): Promise<UserTaxBenefit> {
    return HttpService.api.post(
      `/v1/taxBenefits/benefit/${benefitId}/userTaxBenefits`,
      values,
    )
  }
}
