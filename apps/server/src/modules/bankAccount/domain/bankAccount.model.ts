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

@Entity()
export class BankAccount {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  accountName: string

  @Column({})
  accountType: string

  @ColumnNumeric({ type: 'numeric' })
  balance: number

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.bankAccounts)
  @JoinColumn({ name: 'userId' })
  user?: User

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
