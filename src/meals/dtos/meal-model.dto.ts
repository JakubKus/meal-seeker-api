import { Guid } from '@shared/value-objects/guid.value-object';

export interface MealModelDto {
  id: Guid;
  name: string;
  addedById: string;
  properties: MealModelPropertiesDto;
}

export interface MealModelPropertiesDto {
  preparationTime: PreparationTimeEnum[];
  temperature: TemperatureEnum[];
  flavor: FlavorEnum[];
  calories: CaloriesEnum[];
  macros: MacrosEnum[];
}

export enum PreparationTimeEnum {
  LessThan10 = 'LessThan10',
  From10To20 = 'From10To20',
  MoreThan20 = 'MoreThan20',
}

export enum TemperatureEnum {
  Hot = 'Hot',
  Cold = 'Cold',
}

export enum FlavorEnum {
  Salty = 'Salty',
  Sweet = 'Sweet',
  Spicy = 'Spicy',
}

export enum CaloriesEnum {
  LessThan100 = 'LessThan100',
  From100To300 = 'From100To300',
  MoreThan300 = 'MoreThan300',
}

export enum MacrosEnum {
  HighProtein = 'HighProtein',
  HighCarb = 'HighCarb',
  HighFat = 'HighFat',
}
