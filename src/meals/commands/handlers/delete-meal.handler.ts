import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { MealRepository } from '../../repository/meal.repository';
import { DeleteMealCommand } from '../delete-meal.command';

@CommandHandler(DeleteMealCommand)
export class DeleteMealHandler implements ICommandHandler<DeleteMealCommand> {
  constructor(private readonly repository: MealRepository, private readonly publisher: EventPublisher) {}

  async execute(command: DeleteMealCommand) {
    console.log('Delete meal command');
    const meal = this.publisher.mergeObjectContext(await this.repository.findOneById(command.mealId));

    meal.delete(command.mealId);
    meal.commit();
  }
}
