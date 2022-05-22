import { Column, Entity, PrimaryColumn } from 'typeorm';
import { GuidType } from '@shared/value-objects/guid.value-object';
import { MealModelPropertiesDto } from './meal-model.dto';

@Entity()
export class MealEntity {
  @PrimaryColumn()
  id: GuidType;

  @Column()
  name: string;

  @Column()
  addedById: string;

  @Column({ type: 'jsonb' })
  properties: MealModelPropertiesDto;
}
