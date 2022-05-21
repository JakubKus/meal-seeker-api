import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { MealDeletedEvent } from '../impl/meal-deleted.event';
import { MealRepository } from '../../repository/meal.repository';

@EventsHandler(MealDeletedEvent)
export class MealDeletedHandler implements IEventHandler<MealDeletedEvent> {
  constructor(private readonly repository: MealRepository) {}

  handle(event: MealDeletedEvent) {
    return this.repository.delete(event.mealId);
  }
}
