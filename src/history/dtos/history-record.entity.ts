import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { GuidType } from '@shared/value-objects/guid.value-object';

@Entity()
export class HistoryRecordEntity {
  @PrimaryColumn()
  id: GuidType;

  @Column()
  mealName: string;

  @CreateDateColumn()
  addedDate: Date;

  @Column()
  addedById: string;
}
