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

import { Category } from '../../../modules/category/domain'

@Entity()
export class Expense {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ type: 'numeric' })
  amount: number

  @Column({})
  date: string

  @Column({ nullable: true })
  description?: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.expenses)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({})
  categoryId: string

  @ManyToOne(() => Category, parent => parent.expenses)
  @JoinColumn({ name: 'categoryId' })
  category?: Category

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
