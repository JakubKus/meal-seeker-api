import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { HistoryRecordDeletedEvent } from '../impl/history-record-deleted.event';
import { HistoryRepository } from '../../repository/history.repository';

@EventsHandler(HistoryRecordDeletedEvent)
export class HistoryRecordDeletedHandler implements IEventHandler<HistoryRecordDeletedEvent> {
  constructor(private readonly repository: HistoryRepository) {}

  handle(event: HistoryRecordDeletedEvent) {
    return this.repository.delete(event.historyRecordId);
  }
}
