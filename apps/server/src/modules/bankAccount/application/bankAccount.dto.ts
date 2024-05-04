import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class BankAccountCreateDto {
  @IsString()
  @IsNotEmpty()
  accountName: string

  @IsString()
  @IsNotEmpty()
  accountType: string

  @IsNumber()
  @IsNotEmpty()
  balance: number

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class BankAccountUpdateDto {
  @IsString()
  @IsOptional()
  accountName?: string

  @IsString()
  @IsOptional()
  accountType?: string

  @IsNumber()
  @IsOptional()
  balance?: number

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
