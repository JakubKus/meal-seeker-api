import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { delay, map, Observable } from 'rxjs';
import { DeleteMealCommand } from '../commands/delete-meal.command';
import { RecentMealAddedEvent } from '../events/recent-meal-added.event';

@Injectable()
export class MealSagas {
  @Saga()
  mealAdded = (events$: Observable<unknown>): Observable<ICommand> => {
    return events$.pipe(
      ofType(RecentMealAddedEvent),
      delay(1000),
      map((event) => {
        console.log('Inside [Recent meal Sagas] Saga');
        return new DeleteMealCommand(event.mealId);
      }),
    );
  };
}
