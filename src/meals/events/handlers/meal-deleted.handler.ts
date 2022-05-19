import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { MealDeletedEvent } from '../meal-deleted.event';

@EventsHandler(MealDeletedEvent)
export class MealDeletedHandler implements IEventHandler<MealDeletedEvent> {
  handle(event: MealDeletedEvent) {
    console.log('meal deleted:', event.mealId);
    return [1, 2];
  }
}
