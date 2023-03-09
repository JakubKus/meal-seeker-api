import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { APP_CONFIG_KEY, AppConfig } from '@config/app.config';
import typeormConfig from '@config/typeorm.config';

export const typeormConfigModule = (): DynamicModule =>
  TypeOrmModule.forRootAsync({
    useFactory: (configService: ConfigService) => {
      const postgresConfig = configService.get<AppConfig[APP_CONFIG_KEY.POSTGRES]>(APP_CONFIG_KEY.POSTGRES);
      const environment = configService.get<AppConfig[APP_CONFIG_KEY.NODE_ENV]>(APP_CONFIG_KEY.NODE_ENV);

      const prodConfig: TypeOrmModuleOptions = {
        ...typeormConfig,
        type: 'postgres',
        database: postgresConfig.database,
        url: postgresConfig.url,
        ssl: true,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
      };
      const devConfig: TypeOrmModuleOptions = {
        ...typeormConfig,
        type: 'postgres',
        host: postgresConfig.localhost, // use host for docker compose and localhost for running app locally
        port: postgresConfig.port,
        username: postgresConfig.username,
        password: postgresConfig.password,
        database: postgresConfig.database,
      };

      return environment === 'PROD' ? prodConfig : devConfig;
    },
    inject: [ConfigService],
  });
