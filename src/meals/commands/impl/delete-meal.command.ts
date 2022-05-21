import { Guid } from '@shared/value-objects/guid.value-object';

export class DeleteMealCommand {
  constructor(readonly mealId: Guid) {}
}
