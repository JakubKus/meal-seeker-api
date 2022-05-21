import { AggregateRoot } from '@nestjs/cqrs';
import { MealAddedEvent } from '../events/impl/meal-added.event';
import { MealDeletedEvent } from '../events/impl/meal-deleted.event';
import { MealModelDto } from '../dtos/meal-model.dto';

export class MealModel extends AggregateRoot {
  constructor(private readonly input: MealModelDto) {
    super();
  }

  create() {
    this.apply(new MealAddedEvent(this.input));
  }

  delete() {
    this.apply(new MealDeletedEvent(this.input.id));
  }
}
