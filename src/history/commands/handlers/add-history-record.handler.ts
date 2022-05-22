import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AddHistoryRecordCommand } from '../impl/add-history-record.command';
import { HistoryRecordModel } from '../../models/history-record.model';
import { Guid } from '@shared/value-objects/guid.value-object';

@CommandHandler(AddHistoryRecordCommand)
export class AddHistoryRecordHandler implements ICommandHandler<AddHistoryRecordCommand> {
  constructor(private readonly publisher: EventPublisher) {}

  async execute(command: AddHistoryRecordCommand): Promise<Guid> {
    const HistoryRecordClass = this.publisher.mergeClassContext(HistoryRecordModel);
    const id = new Guid();
    const historyRecord = new HistoryRecordClass({ ...command.historyRecord, id, addedDate: new Date() });

    historyRecord.create();
    historyRecord.commit();

    return id;
  }
}
