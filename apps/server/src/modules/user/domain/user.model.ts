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

import { Notification } from '../../../modules/notification/domain'

import { BankAccount } from '../../../modules/bankAccount/domain'

import { Expense } from '../../../modules/expense/domain'

import { FinancialGoal } from '../../../modules/financialGoal/domain'

import { Bill } from '../../../modules/bill/domain'

import { UserTaxBenefit } from '../../../modules/userTaxBenefit/domain'

import { Report } from '../../../modules/report/domain'

export enum UserStatus {
  VERIFIED = 'VERIFIED',
  CREATED = 'CREATED',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  email: string

  @Column()
  name: string

  @Column({ nullable: true })
  pictureUrl?: string

  @Column({ select: false, nullable: true })
  password: string

  @Column({ enum: UserStatus, default: UserStatus.VERIFIED })
  status: UserStatus

  @OneToMany(() => BankAccount, child => child.user)
  bankAccounts?: BankAccount[]

  @OneToMany(() => Expense, child => child.user)
  expenses?: Expense[]

  @OneToMany(() => FinancialGoal, child => child.user)
  financialGoals?: FinancialGoal[]

  @OneToMany(() => Bill, child => child.user)
  bills?: Bill[]

  @OneToMany(() => UserTaxBenefit, child => child.user)
  userTaxBenefits?: UserTaxBenefit[]

  @OneToMany(() => Report, child => child.user)
  reports?: Report[]

  @OneToMany(() => Notification, notification => notification.user)
  notifications?: Notification[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
