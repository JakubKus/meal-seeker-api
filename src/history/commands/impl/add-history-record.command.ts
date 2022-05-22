import { HistoryRecordModelDto } from '../../dtos/history-record-model.dto';

export class AddHistoryRecordCommand {
  constructor(readonly historyRecord: Omit<HistoryRecordModelDto, 'id' | 'addedDate'>) {}
}
