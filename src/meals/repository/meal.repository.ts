import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Guid } from '@shared/value-objects/guid.value-object';
import { Repository } from 'typeorm';
import { MealEntity } from '../dtos/meal.entity';
import { MealModelDto } from '../dtos/meal-model.dto';

@Injectable()
export class MealRepository {
  constructor(
    @InjectRepository(MealEntity)
    private readonly repository: Repository<MealEntity>,
  ) {}

  async create(meal: MealModelDto) {
    const { id, addedById } = meal;
    // todo: create mapper
    const mealEntity = await this.repository.create({ ...meal, id: id.value, addedById: addedById.value });
    await this.repository.save(mealEntity);
  }

  async findOneById(id: Guid): Promise<MealEntity> {
    return this.repository.findOne(id.value);
  }

  async findAll(): Promise<MealEntity[]> {
    return this.repository.find();
  }

  async delete(id: Guid): Promise<void> {
    await this.repository.delete(id.value);
  }
}
