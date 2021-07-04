import { resolve } from 'path';

const __dirname = resolve();

const config = {
  development: {
    client: 'pg',
    connection: 'postgresql://postgres:postgres@localhost:5432/postgres',
    useNullAsDefault: true,
    debug: true,
    seeds: {
      directory: resolve(__dirname, 'data', 'seeds'),
      loadExtensions: ['*.js'],
    },
    migrations: {
      directory: resolve(__dirname, 'data', 'migrations'),
      loadExtensions: ['*.js'],
    },
  },
};

if ('module' in global) {
  module.exports = config;
}

export default config;
