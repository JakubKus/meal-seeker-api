import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ENV } from '@config/env.object';

const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: String(ENV.PG_HOST),
  port: Number(ENV.PG_PORT) || 5432,
  username: String(ENV.PG_USER),
  password: String(ENV.PG_PASSWORD),
  database: String(ENV.PG_DB),
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [`${__dirname}/src/migrations/*.ts`],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export = typeormConfig;
