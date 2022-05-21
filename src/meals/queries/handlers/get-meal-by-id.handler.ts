import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { MealRepository } from '../../repository/meal.repository';
import { GetMealByIdQuery } from '../impl/get-meal-by-id.query';

@QueryHandler(GetMealByIdQuery)
export class GetMealByIdHandler implements IQueryHandler<GetMealByIdQuery> {
  constructor(private readonly repository: MealRepository) {}

  async execute(query: GetMealByIdQuery) {
    return this.repository.findOneById(query.mealId);
  }
}
