import { HistoryRecordModelDto } from '../../dtos/history-record-model.dto';

export class HistoryRecordAddedEvent {
  constructor(readonly historyRecord: HistoryRecordModelDto) {}
}
