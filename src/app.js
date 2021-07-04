import { Application, jsonApiKoa, UserManagementAddon, UserProcessor } from 'kurier';
import Koa from 'koa';
import knex from 'knex';
import { KoaLoggingMiddleware as logs, Log } from 'logepi';

import knexConfig from '../knexfile.js';

import { login } from './services/user-management.js';
import { permissionProvider } from './providers/permission.js';
import { roleProvider } from './providers/role.js';
import { User } from './resources/user.js';

const app = new Application({
  /* Configure your app here */
  types: [],
  processors: [],
  services: {
    knex: knex(knexConfig[process.env.NODE_ENV || 'development']),
  },
});

app.use(UserManagementAddon, {
  userResource: User,
  userProcessor: UserProcessor,
  userLoginCallback: login,
  userRolesProvider: roleProvider,
  userPermissionsProvider: permissionProvider,
});

const api = new Koa();
const port = process.env.PORT || 3000;

api.use(jsonApiKoa(app)).use(logs());

api.listen(port, () => {
  Log.info('API is now ready', { tags: { port } });
});
