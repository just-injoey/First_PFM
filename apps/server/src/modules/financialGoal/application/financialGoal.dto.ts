import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class FinancialGoalCreateDto {
  @IsNumber()
  @IsNotEmpty()
  targetAmount: number

  @IsNumber()
  @IsNotEmpty()
  currentAmount: number

  @IsString()
  @IsNotEmpty()
  deadline: string

  @IsString()
  @IsOptional()
  description?: string

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

export class FinancialGoalUpdateDto {
  @IsNumber()
  @IsOptional()
  targetAmount?: number

  @IsNumber()
  @IsOptional()
  currentAmount?: number

  @IsString()
  @IsOptional()
  deadline?: string

  @IsString()
  @IsOptional()
  description?: string

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
