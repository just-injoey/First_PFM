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

import { User } from '../../../modules/user/domain'

import { ReportDetail } from '../../../modules/reportDetail/domain'

@Entity()
export class Report {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  reportType: string

  @Column({})
  generatedDate: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.reports)
  @JoinColumn({ name: 'userId' })
  user?: User

  @OneToMany(() => ReportDetail, child => child.report)
  reportDetails?: ReportDetail[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
