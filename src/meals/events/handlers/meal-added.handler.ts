import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { MealAddedEvent } from '../impl/meal-added.event';
import { MealRepository } from '../../repository/meal.repository';

@EventsHandler(MealAddedEvent)
export class MealAddedHandler implements IEventHandler<MealAddedEvent> {
  constructor(private readonly repository: MealRepository) {}

  handle(event: MealAddedEvent) {
    return this.repository.create(event.meal);
  }
}
