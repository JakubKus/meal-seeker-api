import { AggregateRoot } from '@nestjs/cqrs';
import { MealAddedEvent } from '../events/meal-added.event';

export class Meal extends AggregateRoot {
  constructor(private readonly id: string) {
    super();
  }

  addMeal(mealName: string) {
    // logic
    this.apply(new MealAddedEvent(this.id, mealName, new Date()));
  }
}
