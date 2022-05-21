import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Guid, GuidType } from '@shared/value-objects/guid.value-object';
import { GetMealsQuery } from './queries/impl/get-meals.query';
import { AddMealCommand } from './commands/impl/add-meal.command';
import { MealGql } from './dtos/gql/meal-gql.dto';
import { AddMealInput } from './dtos/gql/add-meal.input';
import { MealEntity } from './dtos/meal.entity';
import { DeleteMealCommand } from './commands/impl/delete-meal.command';
import { GetMealByIdQuery } from './queries/impl/get-meal-by-id.query';
import { TEMPORARY_USER_ID } from './temp.user-id';

@Resolver(() => MealGql)
export class MealsResolver {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @Query(() => [MealGql])
  async meals() {
    return this.queryBus.execute<GetMealsQuery, MealEntity[]>(new GetMealsQuery());
  }

  @Query(() => MealGql)
  async meal(@Args('mealId') mealId: GuidType) {
    return this.queryBus.execute<GetMealByIdQuery, MealEntity>(new GetMealByIdQuery(new Guid(mealId)));
  }

  @Mutation(() => ID)
  async addMeal(@Args('addMealInput') addMealInput: AddMealInput) {
    const id = await this.commandBus.execute<AddMealCommand, Guid>(
      new AddMealCommand({ ...addMealInput, addedById: TEMPORARY_USER_ID }),
    );
    return id.value;
  }

  @Mutation(() => ID)
  async deleteMeal(@Args('mealId') mealId: GuidType) {
    await this.commandBus.execute<DeleteMealCommand, void>(new DeleteMealCommand(new Guid(mealId)));
    return mealId;
  }
}
