import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { HistoryRecordAddedEvent } from '../impl/history-record-added.event';
import { HistoryRepository } from '../../repository/history.repository';

@EventsHandler(HistoryRecordAddedEvent)
export class HistoryRecordAddedHandler implements IEventHandler<HistoryRecordAddedEvent> {
  constructor(private readonly repository: HistoryRepository) {}

  handle(event: HistoryRecordAddedEvent) {
    return this.repository.create(event.historyRecord);
  }
}
