import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AddMealCommand } from '../add-meal.command';
import { MealRepository } from '../../repository/meal.repository';

@CommandHandler(AddMealCommand)
export class AddMealHandler implements ICommandHandler<AddMealCommand> {
  constructor(
    private readonly repository: MealRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: AddMealCommand) {
    console.log('Add meal command');

    const { mealId, mealName } = command;
    // const meal = this.publisher.mergeObjectContext(
    //   await this.repository.findOneById(Number(mealId)),
    // );
    // meal.addMeal(mealName);
    // meal.commit();
  }
}
