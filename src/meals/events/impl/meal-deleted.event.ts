import { Guid } from '@shared/value-objects/guid.value-object';

export class MealDeletedEvent {
  constructor(readonly mealId: Guid) {}
}
