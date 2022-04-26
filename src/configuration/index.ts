const { env: environment } = process;

export const ENVS = {
  development: 'development',
  heroku: 'heroku',
  production: 'production',
} as const;

export const {
  ENV = ENVS.development,
  CLIENT_URL = 'http://localhost:3000',
  SERVER_NAME = 'Node Api',
  DB_HOST = 'localhost',
  DB_DATABASE = 'root',
  DB_LOGGING = false,
  DB_USER = 'root',
  DB_PASSWORD = '',
  DB_PORT = 5432,
} = environment;

export const PORT = Number(environment.PORT) || 4040;

export const RESPONSE_MESSAGES = {
  internalServerError: 'INTERNAL_SERVER_ERROR',
  invalidRecoveryCode: 'INVALID_RECOVERY_CODE',
  emailAlreadyInUse: 'EMAIL_ALREADY_IN_USE',
  accessDenied: 'ACCESS_DENIED',
  invalidData: 'INVALID_DATA',
  missingData: 'MISSING_DATA',
  ok: 'OK',
} as const;

export const RESPONSE_STATUSES = {
  internalServerError: 500,
  unauthorized: 401,
  badRequest: 400,
  conflict: 409,
  ok: 200,
} as const;

export const ROLES = {
  admin: 'admin',
  user: 'user',
} as const;
