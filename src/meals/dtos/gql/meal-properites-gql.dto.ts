import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CaloriesEnum, FlavorEnum, MacrosEnum, PreparationTimeEnum, TemperatureEnum } from '../meal-model.dto';

registerEnumType(PreparationTimeEnum, { name: 'PreparationTimeEnum' });
registerEnumType(TemperatureEnum, { name: 'TemperatureEnum' });
registerEnumType(FlavorEnum, { name: 'FlavorEnum' });
registerEnumType(CaloriesEnum, { name: 'CaloriesEnum' });
registerEnumType(MacrosEnum, { name: 'MacrosEnum' });

@ObjectType()
export class MealPropertiesGql {
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
