import { MealModelDto } from '../../dtos/meal-model.dto';

export class AddMealCommand {
  constructor(readonly meal: Omit<MealModelDto, 'id'>) {}
}
