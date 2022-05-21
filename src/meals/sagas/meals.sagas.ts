import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { MealAddedEvent } from '../events/impl/meal-added.event';

@Injectable()
export class MealsSagas {
  @Saga()
  mealAdded = (events$: Observable<unknown>): Observable<ICommand> => {
    return events$.pipe(ofType(MealAddedEvent));
  };
}
