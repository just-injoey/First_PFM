import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class UserTaxBenefitCreateDto {
  @IsNumber()
  @IsNotEmpty()
  applicableYear: number

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  benefitId?: string

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

export class UserTaxBenefitUpdateDto {
  @IsNumber()
  @IsOptional()
  applicableYear?: number

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  benefitId?: string

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
