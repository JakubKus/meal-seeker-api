import { Field, InputType } from '@nestjs/graphql';
import { CaloriesEnum, FlavorEnum, MacrosEnum, PreparationTimeEnum, TemperatureEnum } from '../meal-model.dto';

@InputType()
class MealPropsInput {
  @Field(() => [PreparationTimeEnum])
  preparationTime: PreparationTimeEnum[];

  @Field(() => [TemperatureEnum])
  temperature: TemperatureEnum[];

  @Field(() => [FlavorEnum])
  flavor: FlavorEnum[];

  @Field(() => [CaloriesEnum])
  calories: CaloriesEnum[];

  @Field(() => [MacrosEnum])
  macros: MacrosEnum[];
}

@InputType()
export class AddMealInput {
  @Field()
  name: string;

  @Field()
  properties: MealPropsInput;
}
