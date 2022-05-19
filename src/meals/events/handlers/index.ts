import { RecentMealAddedHandler } from './recent-meal-added.handler';
import { MealAddedHandler } from './meal-added.handler';
import { MealDeletedHandler } from './meal-deleted.handler';

export const EventHandlers = [MealAddedHandler, MealDeletedHandler, RecentMealAddedHandler];
