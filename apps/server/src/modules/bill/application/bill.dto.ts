import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class BillCreateDto {
  @IsNumber()
  @IsNotEmpty()
  amountDue: number

  @IsString()
  @IsNotEmpty()
  dueDate: string

  @IsBoolean()
  @IsNotEmpty()
  isPaid: boolean

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  categoryId?: string

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

export class BillUpdateDto {
  @IsNumber()
  @IsOptional()
  amountDue?: number

  @IsString()
  @IsOptional()
  dueDate?: string

  @IsBoolean()
  @IsOptional()
  isPaid?: boolean

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  categoryId?: string

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
