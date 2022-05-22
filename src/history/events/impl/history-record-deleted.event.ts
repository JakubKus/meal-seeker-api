import { Guid } from '@shared/value-objects/guid.value-object';

export class HistoryRecordDeletedEvent {
  constructor(readonly historyRecordId: Guid) {}
}
