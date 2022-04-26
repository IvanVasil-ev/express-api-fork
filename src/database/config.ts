import { DB_DATABASE, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } from '../configuration';

export default {
  development: {
    database: DB_DATABASE,
    password: DB_PASSWORD,
    username: DB_USER,
    host: DB_HOST,
    port: DB_PORT,
    logging: true,
    dialect: 'postgres',
  },
  test: {
    database: `${DB_DATABASE}_test`,
    password: DB_PASSWORD,
    username: DB_USER,
    host: DB_HOST,
    port: DB_PORT,
    logging: false,
    dialect: 'postgres',
  },
  production: {
    database: DB_DATABASE,
    password: DB_PASSWORD,
    username: DB_USER,
    host: DB_HOST,
    port: DB_PORT,
    logging: false,
    dialect: 'postgres',
  },
};
