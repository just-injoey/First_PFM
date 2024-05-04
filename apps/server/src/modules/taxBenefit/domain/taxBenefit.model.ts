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

import { UserTaxBenefit } from '../../../modules/userTaxBenefit/domain'

@Entity()
export class TaxBenefit {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  description: string

  @Column({})
  eligibilityCriteria: string

  @OneToMany(() => UserTaxBenefit, child => child.benefit)
  userTaxBenefitsAsBenefit?: UserTaxBenefit[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
