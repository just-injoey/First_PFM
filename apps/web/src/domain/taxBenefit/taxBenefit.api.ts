import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { TaxBenefit } from './taxBenefit.model'

export class TaxBenefitApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<TaxBenefit>,
  ): Promise<TaxBenefit[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/taxBenefits${buildOptions}`)
  }

  static findOne(
    taxBenefitId: string,
    queryOptions?: ApiHelper.QueryOptions<TaxBenefit>,
  ): Promise<TaxBenefit> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/taxBenefits/${taxBenefitId}${buildOptions}`)
  }

  static createOne(values: Partial<TaxBenefit>): Promise<TaxBenefit> {
    return HttpService.api.post(`/v1/taxBenefits`, values)
  }

  static updateOne(
    taxBenefitId: string,
    values: Partial<TaxBenefit>,
  ): Promise<TaxBenefit> {
    return HttpService.api.patch(`/v1/taxBenefits/${taxBenefitId}`, values)
  }

  static deleteOne(taxBenefitId: string): Promise<void> {
    return HttpService.api.delete(`/v1/taxBenefits/${taxBenefitId}`)
  }
}
