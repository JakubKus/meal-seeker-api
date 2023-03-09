import { ENV } from '@config/env.object';

export enum APP_CONFIG_KEY {
  PORT = 'PORT',
  NODE_ENV = 'NODE_ENV',
  POSTGRES = 'POSTGRES',
  AUTH0 = 'AUTH0',
}

export const appConfig = () => ({
  [APP_CONFIG_KEY.PORT]: Number(ENV.PORT) || 3001,
  [APP_CONFIG_KEY.NODE_ENV]: String(ENV.NODE_ENV),
  [APP_CONFIG_KEY.POSTGRES]: {
    database: String(ENV.PG_DB),
    username: String(ENV.PG_USER),
    password: String(ENV.PG_PASSWORD),
    host: String(ENV.PG_HOST),
    localhost: String(ENV.PG_LOCALHOST),
    port: Number(ENV.PG_PORT) || 5432,
    url: String(ENV.DATABASE_URL),
  },
  [APP_CONFIG_KEY.AUTH0]: {
    audience: String(ENV.AUTH0_AUDIENCE),
    domain: String(ENV.AUTH0_DOMAIN),
  },
});

export type AppConfig = ReturnType<typeof appConfig>;
