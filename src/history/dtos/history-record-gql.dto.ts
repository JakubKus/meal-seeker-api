import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { GuidType } from '@shared/value-objects/guid.value-object';

@ObjectType()
export class HistoryGql {
  @Field(() => ID)
  id: GuidType;

  @Field()
  mealName: string;

  @Field(() => GraphQLISODateTime)
  addedDate: Date;
}
