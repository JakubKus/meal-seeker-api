import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AddMealCommand } from '../impl/add-meal.command';
import { MealModel } from '../../models/meal.model';
import { Guid } from '@shared/value-objects/guid.value-object';

@CommandHandler(AddMealCommand)
export class AddMealHandler implements ICommandHandler<AddMealCommand> {
  constructor(private readonly publisher: EventPublisher) {}

  async execute(command: AddMealCommand): Promise<Guid> {
    const MealClass = this.publisher.mergeClassContext(MealModel);
    const id = new Guid();
    const meal = new MealClass({ ...command.meal, id });

    meal.create();
    meal.commit();

    return id;
  }
}
