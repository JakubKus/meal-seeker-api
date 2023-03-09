enum ENV_KEY {
  PG_DB = 'PG_DB',
  PG_USER = 'PG_USER',
  PG_PASSWORD = 'PG_PASSWORD',
  PG_PORT = 'PG_PORT',
  PG_HOST = 'PG_HOST',
  PG_LOCALHOST = 'PG_LOCALHOST',
  PORT = 'PORT',
  AUTH0_AUDIENCE = 'AUTH0_AUDIENCE',
  AUTH0_DOMAIN = 'AUTH0_DOMAIN',
  DATABASE_URL = 'DATABASE_URL',
  NODE_ENV = 'NODE_ENV',
}

export const ENV: Record<ENV_KEY, string | number> = process.env as Record<ENV_KEY, string | number>;
