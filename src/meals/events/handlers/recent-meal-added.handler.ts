import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { RecentMealAddedEvent } from '../recent-meal-added.event';

@EventsHandler(RecentMealAddedEvent)
export class RecentMealAddedHandler implements IEventHandler<RecentMealAddedEvent> {
  handle(event: RecentMealAddedEvent) {
    console.log('recent meal added:', event.mealId);
  }
}
