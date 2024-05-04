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
export class Bill {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ type: 'numeric' })
  amountDue: number

  @Column({})
  dueDate: string

  @Column({})
  isPaid: boolean

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.bills)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({})
  categoryId: string

  @ManyToOne(() => Category, parent => parent.bills)
  @JoinColumn({ name: 'categoryId' })
  category?: Category

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
