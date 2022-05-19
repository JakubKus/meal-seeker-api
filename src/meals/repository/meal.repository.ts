import { Injectable } from '@nestjs/common';
import { Meal } from '../models/meal.model';
import { Repository } from 'typeorm';
import { MealEntity } from '../entities/meal.entity';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MealRepository {
  constructor(
    @InjectRepository(MealEntity)
    private readonly repository: Repository<MealEntity>,
  ) {}

  async create(name: string): Promise<void> {
    const mealEntity = await this.repository.create({ name, dateAdded: new Date() });
    await this.repository.save(mealEntity);
  }

  async findOneById(id: string): Promise<Meal> {
    const mealEntity = await this.repository.findOne(id);
    return new Meal(mealEntity.name);
  }

  async findAll(): Promise<Meal[]> {
    const mealEntities = await this.repository.find();
    return mealEntities.map((entity) => new Meal(entity.name));
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
