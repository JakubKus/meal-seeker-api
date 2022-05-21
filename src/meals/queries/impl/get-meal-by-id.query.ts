import { Guid } from '@shared/value-objects/guid.value-object';

export class GetMealByIdQuery {
  constructor(readonly mealId: Guid) {}
}
