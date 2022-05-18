import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { delay, map, Observable } from 'rxjs';
import { RecentMealAddedEvent } from '../events/recent-meal-added.event';
import { AddMealCommand } from '../commands/add-meal.command';

@Injectable()
export class MealsSagas {
  @Saga()
  recentMealAdded = (events$: Observable<unknown>): Observable<ICommand> => {
    return events$.pipe(
      ofType(RecentMealAddedEvent),
      delay(1000),
      map((event) => {
        console.log('Inside [Recent meal Sagas] Saga');
        return new AddMealCommand(event.mealId, 'meal here');
      }),
    );
  };
}
