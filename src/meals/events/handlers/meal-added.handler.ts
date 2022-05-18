import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { MealAddedEvent } from '../meal-added.event';

@EventsHandler(MealAddedEvent)
export class MealAddedHandler implements IEventHandler<MealAddedEvent> {
  handle(event: MealAddedEvent) {
    console.log('meal added:', event.name);
  }
}
