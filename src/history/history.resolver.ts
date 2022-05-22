import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Guid, GuidType } from '@shared/value-objects/guid.value-object';
import { GetUserHistoryQuery } from './queries/impl/get-user-history.query';
import { HistoryGql } from './dtos/history-record-gql.dto';
import { HistoryRecordEntity } from './dtos/history-record.entity';
import { UseGuards } from '@nestjs/common';
import { CurrentUserId, GqlAuthGuard } from '../auth/gql-auth.guard';
import { AddHistoryRecordCommand } from './commands/impl/add-history-record.command';
import { DeleteHistoryRecordCommand } from './commands/impl/delete-history-record.command';

@Resolver(() => HistoryGql)
export class HistoryResolver {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @Query(() => [HistoryGql])
  @UseGuards(GqlAuthGuard)
  async userHistory(@CurrentUserId() userId: string) {
    return this.queryBus.execute<GetUserHistoryQuery, HistoryRecordEntity[]>(new GetUserHistoryQuery(userId));
  }

  @Mutation(() => ID)
  @UseGuards(GqlAuthGuard)
  async addHistoryRecord(@Args('mealName') mealName: string, @CurrentUserId() userId: string) {
    const id = await this.commandBus.execute<AddHistoryRecordCommand, Guid>(
      new AddHistoryRecordCommand({ mealName, addedById: userId }),
    );
    return id.value;
  }

  @Mutation(() => ID)
  @UseGuards(GqlAuthGuard)
  async deleteHistoryRecord(@Args('historyRecordId') historyRecordId: GuidType) {
    await this.commandBus.execute<DeleteHistoryRecordCommand, void>(
      new DeleteHistoryRecordCommand(new Guid(historyRecordId)),
    );
    return historyRecordId;
  }
}
