import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { BankAccount } from './bankAccount.model'

export class BankAccountApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<BankAccount>,
  ): Promise<BankAccount[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/bankAccounts${buildOptions}`)
  }

  static findOne(
    bankAccountId: string,
    queryOptions?: ApiHelper.QueryOptions<BankAccount>,
  ): Promise<BankAccount> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/bankAccounts/${bankAccountId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<BankAccount>): Promise<BankAccount> {
    return HttpService.api.post(`/v1/bankAccounts`, values)
  }

  static updateOne(
    bankAccountId: string,
    values: Partial<BankAccount>,
  ): Promise<BankAccount> {
    return HttpService.api.patch(`/v1/bankAccounts/${bankAccountId}`, values)
  }

  static deleteOne(bankAccountId: string): Promise<void> {
    return HttpService.api.delete(`/v1/bankAccounts/${bankAccountId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<BankAccount>,
  ): Promise<BankAccount[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/bankAccounts${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<BankAccount>,
  ): Promise<BankAccount> {
    return HttpService.api.post(`/v1/users/user/${userId}/bankAccounts`, values)
  }
}
