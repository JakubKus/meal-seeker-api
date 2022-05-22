import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { QueryHandlers } from './queries/handlers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryResolver } from './history.resolver';
import { HistoryRepository } from './repository/history.repository';
import { HistoryRecordEntity } from './dtos/history-record.entity';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([HistoryRecordEntity])],
  providers: [...CommandHandlers, ...EventHandlers, ...QueryHandlers, HistoryResolver, HistoryRepository],
})
export class HistoryModule {}
