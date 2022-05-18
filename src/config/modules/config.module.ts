import { DynamicModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from '@config/app.config';

export const configModule = (): DynamicModule =>
  ConfigModule.forRoot({
    load: [appConfig],
    isGlobal: true,
  });
