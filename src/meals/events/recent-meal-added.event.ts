export class RecentMealAddedEvent {
  constructor(readonly mealId: string, readonly mealName: string | undefined, readonly dateAdded: Date) {}
}
