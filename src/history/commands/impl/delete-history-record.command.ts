import { Guid } from '@shared/value-objects/guid.value-object';

export class DeleteHistoryRecordCommand {
  constructor(readonly historyRecordId: Guid) {}
}
