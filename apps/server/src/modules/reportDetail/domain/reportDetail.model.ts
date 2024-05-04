import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Report } from '../../../modules/report/domain'

@Entity()
export class ReportDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  detailDescription: string

  @ColumnNumeric({ type: 'numeric' })
  value: number

  @Column({})
  reportId: string

  @ManyToOne(() => Report, parent => parent.reportDetails)
  @JoinColumn({ name: 'reportId' })
  report?: Report

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
