import { resolve } from 'path';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://postgres:postgres@localhost:5432/postgres',
    useNullAsDefault: true,
    debug: true,
    seeds: {
      directory: resolve(__dirname, 'data', 'seeds'),
      loadExtensions: ['*.ts'],
    },
    migrations: {
      directory: resolve(__dirname, 'data', 'migrations'),
      loadExtensions: ['*.ts'],
    },
  },
};
