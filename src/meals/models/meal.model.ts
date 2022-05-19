import { AggregateRoot } from '@nestjs/cqrs';
import { MealAddedEvent } from '../events/meal-added.event';
import { v4 as uuid } from 'uuid';
import { MealDeletedEvent } from '../events/meal-deleted.event';

export class Meal extends AggregateRoot {
  constructor(private readonly name: string) {
    super();
  }

  create() {
    this.apply(new MealAddedEvent(uuid(), this.name));
  }

  delete(mealId: string) {
    this.apply(new MealDeletedEvent(mealId));
  }
}
