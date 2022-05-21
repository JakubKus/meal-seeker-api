import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { MealRepository } from '../../repository/meal.repository';
import { DeleteMealCommand } from '../impl/delete-meal.command';
import { MealModel } from '../../models/meal.model';
import { Guid } from '@shared/value-objects/guid.value-object';

@CommandHandler(DeleteMealCommand)
export class DeleteMealHandler implements ICommandHandler<DeleteMealCommand> {
  constructor(private readonly repository: MealRepository, private readonly publisher: EventPublisher) {}

  async execute(command: DeleteMealCommand) {
    const mealEntity = await this.repository.findOneById(command.mealId);
    // todo: create mapper
    const mealToDelete = new MealModel({
      ...mealEntity,
      id: new Guid(mealEntity.id),
      addedById: new Guid(mealEntity.addedById),
    });
    const meal = this.publisher.mergeObjectContext(mealToDelete);

    meal.delete();
    meal.commit();
  }
}
