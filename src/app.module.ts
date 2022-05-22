import { Module } from '@nestjs/common';
import { MealsModule } from './meals/meals.module';
import { typeormConfigModule } from '@config/modules/typeorm.config.module';
import { gqlConfigModule } from '@config/modules/gql.config.module';
import { configModule } from '@config/modules/config.module';
import { GqlAuthModule } from './auth/gql.auth';

@Module({
  imports: [configModule(), typeormConfigModule(), gqlConfigModule(), GqlAuthModule, MealsModule],
})
export class AppModule {}
