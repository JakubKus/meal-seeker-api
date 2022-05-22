import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { HistoryRepository } from '../../repository/history.repository';
import { GetUserHistoryQuery } from '../impl/get-user-history.query';

@QueryHandler(GetUserHistoryQuery)
export class GetUserHistoryHandler implements IQueryHandler<GetUserHistoryQuery> {
  constructor(private readonly repository: HistoryRepository) {}

  async execute(query: GetUserHistoryQuery) {
    return this.repository.findAllByUserId(query.userId);
  }
}
