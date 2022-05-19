import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AddMealCommand } from '../add-meal.command';
import { Meal } from '../../models/meal.model';

@CommandHandler(AddMealCommand)
export class AddMealHandler implements ICommandHandler<AddMealCommand> {
  constructor(private readonly publisher: EventPublisher) {}

  async execute(command: AddMealCommand) {
    console.log('Add meal command');
    const MealModel = this.publisher.mergeClassContext(Meal);
    const meal = new MealModel(command.mealName);

    meal.create();
    meal.commit();
  }
}
