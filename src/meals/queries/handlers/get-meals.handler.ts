import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { MealRepository } from '../../repository/meal.repository';
import { GetMealsQuery } from '../impl/get-meals.query';

@QueryHandler(GetMealsQuery)
export class GetMealsHandler implements IQueryHandler<GetMealsQuery> {
  constructor(private readonly repository: MealRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}
