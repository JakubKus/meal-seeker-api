import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MealRepository } from './repository/meal.repository';
import { MealSagas } from './sagas/meal.sagas';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { QueryHandlers } from './queries/handlers';
import { MealsController } from './meals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MealEntity } from './entities/meal.entity';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([MealEntity])],
  controllers: [MealsController],
  providers: [...CommandHandlers, ...EventHandlers, ...QueryHandlers, MealRepository, MealSagas],
})
export class MealsModule {}
