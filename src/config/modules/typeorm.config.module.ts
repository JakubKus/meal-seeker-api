import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from '@config/app.config';
import typeormConfig from '@config/typeorm.config';

export const typeormConfigModule = (): DynamicModule =>
  TypeOrmModule.forRootAsync({
    useFactory: (config: ConfigService) => {
      const postgresConfig = config.get<AppConfig['postgres']>('postgres');
      return {
        ...typeormConfig,
        type: 'postgres',
        host: postgresConfig.host,
        port: postgresConfig.port,
        username: postgresConfig.username,
        password: postgresConfig.password,
        database: postgresConfig.database,
      };
    },
    inject: [ConfigService],
  });
