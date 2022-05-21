import { MealModelDto } from '../../dtos/meal-model.dto';

export class MealAddedEvent {
  constructor(readonly meal: MealModelDto) {}
}
