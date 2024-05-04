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

import { TaxBenefit } from '../../../modules/taxBenefit/domain'

@Entity()
export class UserTaxBenefit {
  @ColumnNumeric({ type: 'numeric' })
  applicableYear: number

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.userTaxBenefits)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({})
  benefitId: string

  @ManyToOne(() => TaxBenefit, parent => parent.userTaxBenefitsAsBenefit)
  @JoinColumn({ name: 'benefitId' })
  benefit?: TaxBenefit

  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
