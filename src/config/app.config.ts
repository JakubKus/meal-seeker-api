import { ENV } from '@config/env.object';

export const appConfig = () => ({
  port: Number(ENV.PORT) || 5000,
  postgres: {
    database: String(ENV.PG_DB),
    username: String(ENV.PG_USER),
    password: String(ENV.PG_PASSWORD),
    host: String(ENV.PG_HOST),
    localHost: String(ENV.PG_LOCAL_HOST),
    port: Number(ENV.PG_PORT) || 5432,
  },
});

export type AppConfig = ReturnType<typeof appConfig>;
