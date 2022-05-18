import { Injectable } from '@nestjs/common';

@Injectable()
export class MealRepository {
  constructor() {}

  // async findOneById(id: number): Promise<Meal> {
  //   const a = await this.mealsRepository.findOne(id);
  //   const b = new Meal('qew')
  //   return {} as Meal;
  // }

  async findAll(): Promise<unknown[]> {
    return [];
  }
}
