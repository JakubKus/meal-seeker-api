import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { MealRepository } from '../../repository/meal.repository';
import { GetMealsQuery } from '../get-meals.query';

@QueryHandler(GetMealsQuery)
export class GetMealsHandler implements IQueryHandler<GetMealsQuery> {
  constructor(private readonly repository: MealRepository) {}

  async execute(query: GetMealsQuery) {
    console.log('Get meals query:');
    return this.repository.findAll();
  }
}
