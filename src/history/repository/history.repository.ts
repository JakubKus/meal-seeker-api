import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Guid } from '@shared/value-objects/guid.value-object';
import { Repository } from 'typeorm';
import { HistoryRecordEntity } from '../dtos/history-record.entity';
import { HistoryRecordModelDto } from '../dtos/history-record-model.dto';

@Injectable()
export class HistoryRepository {
  constructor(
    @InjectRepository(HistoryRecordEntity)
    private readonly repository: Repository<HistoryRecordEntity>,
  ) {}

  async create(historyRecord: HistoryRecordModelDto) {
    // todo: create mapper
    const historyRecordEntity = await this.repository.create({ ...historyRecord, id: historyRecord.id.value });
    await this.repository.save(historyRecordEntity);
  }

  async findOneById(id: Guid): Promise<HistoryRecordEntity> {
    return this.repository.findOne(id.value);
  }

  async findAllByUserId(userId: string): Promise<HistoryRecordEntity[]> {
    return this.repository.find({ where: { addedById: userId } });
  }

  async delete(id: Guid): Promise<void> {
    await this.repository.delete(id.value);
  }
}
