# `kurier-starter-pack-javascript`

A template to create projects using [Kurier](https://github.com/kurierjs/kurier), served with Koa and a Postgres database.

Features include:

- JavaScript (Native ESM) environment, linted with Prettier
- Pre-configured user authentication
- Koa HTTP transport layer
- Postgres database available via `docker-compose`
- HTTP logs via [`logepi`](https://github.com/joelalejandro/logepi)

## How to use

[Click right here](https://github.com/kurierjs/kurier-starter-pack-javascript/generate) or use GitHub CLI:

```bash
gh repo create my-api -p kurierjs/kurier-starter-pack-javascript
```

## Usage

1. Run `npm install` to install all dependencies.
2. Run `docker-compose up -d` to start a daemonized Docker container with a Postgres database.
3. Run `yarn start:dev` and execute a request towards `http://localhost:3000`.

## Available commands

- `start:dev` runs the API in a local environment using `nodemon`.
- `migrate:make <name>` creates a Knex migration file in `data/migrations/<timestamp>_<name>.js`.
- `migrate:latest` runs all pending migrations.
- `migrate:rollback` reverts the last set of migrations.
- `seed:make <name>` creates a Knex seed file in `data/seeds/<name>.js`.
- `seed:run` executes all seed files.

## License

MIT
