import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { HistoryRepository } from '../../repository/history.repository';
import { DeleteHistoryRecordCommand } from '../impl/delete-history-record.command';
import { HistoryRecordModel } from '../../models/history-record.model';
import { Guid } from '@shared/value-objects/guid.value-object';

@CommandHandler(DeleteHistoryRecordCommand)
export class DeleteHistoryRecordHandler implements ICommandHandler<DeleteHistoryRecordCommand> {
  constructor(private readonly repository: HistoryRepository, private readonly publisher: EventPublisher) {}

  async execute(command: DeleteHistoryRecordCommand) {
    const historyRecordEntity = await this.repository.findOneById(command.historyRecordId);
    // todo: create mapper
    const historyRecordToDelete = new HistoryRecordModel({
      ...historyRecordEntity,
      id: new Guid(historyRecordEntity.id),
    });
    const historyRecord = this.publisher.mergeObjectContext(historyRecordToDelete);

    historyRecord.delete();
    historyRecord.commit();
  }
}
