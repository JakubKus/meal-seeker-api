import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ENV } from '@config/env.object';

const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: String(ENV.PG_LOCALHOST),
  port: Number(ENV.PG_PORT) || 5432,
  username: String(ENV.PG_USER),
  password: String(ENV.PG_PASSWORD),
  database: String(ENV.PG_DB),
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default typeormConfig;
