import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MealRepository } from './repository/meal.repository';
import { MealsSagas } from './sagas/meals.sagas';

@Module({
  imports: [CqrsModule],
  providers: [MealRepository, MealsSagas],
})
export class MealsModule {}
