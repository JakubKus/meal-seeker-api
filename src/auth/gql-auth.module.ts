import { Module } from '@nestjs/common';
import { GqlAuthGuard } from './gql-auth.guard';

@Module({
  providers: [GqlAuthGuard],
})
export class GqlAuthModule {}
