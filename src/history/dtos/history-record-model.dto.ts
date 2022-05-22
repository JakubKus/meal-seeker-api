import { Guid } from '@shared/value-objects/guid.value-object';

export interface HistoryRecordModelDto {
  id: Guid;
  mealName: string;
  addedDate: Date;
  addedById: string;
}
