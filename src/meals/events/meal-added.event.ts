export class MealAddedEvent {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly dateAdded: Date,
  ) {}
}
