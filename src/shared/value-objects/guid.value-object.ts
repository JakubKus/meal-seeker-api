import { v4 as uuid } from 'uuid';

export type GuidType = string;

export class Guid {
  private readonly id: GuidType;

  constructor(id?: GuidType) {
    this.id = id || uuid();
  }

  get value(): GuidType {
    return this.id;
  }
}
