import { Module } from '@nestjs/common';
import { Field, Int, ObjectType, Query, Resolver } from '@nestjs/graphql';

@ObjectType()
export class Author {
  @Field(() => Int)
  id: number;
}

@Resolver(() => Author)
export class AuthorsResolver {
  @Query(() => [Author])
  async authors() {
    return [];
  }
}

@Module({
  providers: [AuthorsResolver],
})
export class GqlModule {}
