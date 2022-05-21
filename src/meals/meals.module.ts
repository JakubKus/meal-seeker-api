import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MealRepository } from './repository/meal.repository';
import { MealsSagas } from './sagas/meals.sagas';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { QueryHandlers } from './queries/handlers';
import { MealsResolver } from './meals.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MealEntity } from './dtos/meal.entity';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([MealEntity])],
  providers: [...CommandHandlers, ...EventHandlers, ...QueryHandlers, MealsResolver, MealRepository /*, MealsSagas*/],
})
export class MealsModule {}
