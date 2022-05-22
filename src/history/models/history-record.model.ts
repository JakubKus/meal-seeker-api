import { AggregateRoot } from '@nestjs/cqrs';
import { HistoryRecordAddedEvent } from '../events/impl/history-record-added.event';
import { HistoryRecordDeletedEvent } from '../events/impl/history-record-deleted.event';
import { HistoryRecordModelDto } from '../dtos/history-record-model.dto';

export class HistoryRecordModel extends AggregateRoot {
  constructor(private readonly input: HistoryRecordModelDto) {
    super();
  }

  create() {
    this.apply(new HistoryRecordAddedEvent(this.input));
  }

  delete() {
    this.apply(new HistoryRecordDeletedEvent(this.input.id));
  }
}
