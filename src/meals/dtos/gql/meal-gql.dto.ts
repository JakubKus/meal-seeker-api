import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GuidType } from '@shared/value-objects/guid.value-object';
import { MealPropertiesGql } from './meal-properites-gql.dto';

@ObjectType()
export class MealGql {
  @Field(() => ID)
  id: GuidType;

  @Field()
  name: string;

  @Field(() => ID)
  addedById: GuidType;

  @Field(() => MealPropertiesGql)
  properties: MealPropertiesGql;
}
