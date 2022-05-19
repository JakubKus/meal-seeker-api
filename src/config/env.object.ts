enum ENV_KEY {
  PG_DB = 'PG_DB',
  PG_USER = 'PG_USER',
  PG_PASSWORD = 'PG_PASSWORD',
  PG_PORT = 'PG_PORT',
  PG_HOST = 'PG_HOST',
  PG_LOCAL_HOST = 'PG_LOCAL_HOST',
  PORT = 'PORT',
}

export const ENV: Record<ENV_KEY, string | number> = process.env as Record<ENV_KEY, string | number>;
