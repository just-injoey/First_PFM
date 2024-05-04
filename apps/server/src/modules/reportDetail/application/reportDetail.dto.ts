import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class ReportDetailCreateDto {
  @IsString()
  @IsNotEmpty()
  detailDescription: string

  @IsNumber()
  @IsNotEmpty()
  value: number

  @IsString()
  @IsOptional()
  reportId?: string

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

export class ReportDetailUpdateDto {
  @IsString()
  @IsOptional()
  detailDescription?: string

  @IsNumber()
  @IsOptional()
  value?: number

  @IsString()
  @IsOptional()
  reportId?: string

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
