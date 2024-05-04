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

import { Expense } from '../../../modules/expense/domain'

import { Bill } from '../../../modules/bill/domain'

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  name: string

  @Column({})
  type: string

  @OneToMany(() => Expense, child => child.category)
  expenses?: Expense[]

  @OneToMany(() => Bill, child => child.category)
  bills?: Bill[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
