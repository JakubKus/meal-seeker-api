import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AddMealCommand } from './commands/add-meal.command';
import { AddMealDto } from './interfaces/add-meal-dto.interface';
import { Meal } from './models/meal.model';
import { GetMealsQuery } from './queries/get-meals.query';

@Controller('meals')
export class MealsController {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @Post()
  async addMeal(@Body() dto: AddMealDto) {
    return this.commandBus.execute(new AddMealCommand(dto.name));
  }

  @Get('all')
  async findAll(): Promise<Meal[]> {
    const a = this.queryBus.execute(new GetMealsQuery());
    console.log(a);
    return a;
  }
}
