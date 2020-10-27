<h1 align="center">Welcome to pg-typegen 👋</h1>
<p>
    <a href="https://www.npmjs.com/package/pg-typegen" target="_blank">
        <img alt="Version" src="https://img.shields.io/npm/v/pg-typegen.svg">
    </a>
    <a href="https://github.com/aldis-ameriks/pg-typegen/graphs/commit-activity" target="_blank">
        <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
    </a>
    <a href="https://github.com/aldis-ameriks/pg-typegen/blob/master/LICENSE" target="_blank">
        <img alt="License: MIT" src="https://img.shields.io/github/license/aldis-ameriks/pg-typegen" />
    </a>
    <a href='https://coveralls.io/github/aldis-ameriks/pg-typegen?branch=master'>
        <img src='https://coveralls.io/repos/github/aldis-ameriks/pg-typegen/badge.svg?branch=master' alt='Coverage Status' />
    </a>
    <a href="https://github.com/aldis-ameriks/pg-typegen/workflows/CI/badge.svg" target="_blank">
        <img alt="CI" src="https://github.com/aldis-ameriks/pg-typegen/workflows/CI/badge.svg" />
    </a>
</p>

> Generate TypeScript type definitions from Postgres database.

## Install

```sh
$ npm install pg-typegen
# or
$ yarn add pg-typegen
```

## Usage

```
Usage: pg-typegen [options] <connection>

Options:
  -V, --version              output the version number
  -f, --suffix <suffix>      suffix to append to generated table type, e.g. item -> ItemEntity (default: "Entity")
  -s, --schema <schema>      schema (default: "public")
  -h, --header <header>      header content (default: "")
  -o, --output <output>      file output path (default: "stdout")
  -e, --exclude <exclude>    excluded tables and enums as comma separated string e.g. knex_migrations,knex_migrations_lock (default: [])
  --type                     use type definitions instead of interfaces in generated output (default: false)
  --noSemi, --no-semicolons  omit semicolons in generated types
  --ssl                      use ssl (default: false)
  --optionals                use optionals "?" instead of null (default: false)
  --pascal-enums             transform enum keys to pascal case (default: false)
  --bigint                   use bigint for int8 types instead of strings (default: false)
  --date-as-string           use string for date types instead of javascript Date object (default: false)
  --help                     display help for command

Example:
  $ pg-typegen -o ./entities.ts postgres://username:password@localhost:5432/database
```

Given database table
```sql
CREATE TYPE user_state AS ENUM (
  'asleep',
  'awake'
);

CREATE TABLE users (
    id int4 NOT NULL,
    name varchar(255),
    state user_state,
    is_enabled bool NOT NULL DEFAULT FALSE
);
```

Running `pg-typegen -o ./entities.ts postgres://username:password@localhost:5432/database`
Will generate the following type definitions
```ts
enum UserState {
  asleep = 'asleep',
  awake = 'awake'
}

interface UserEntity {
  id: number;
  name: string | null;
  state: UserState | null;
  is_enabled: boolean;
}
```

### Running from code

```ts
import { join } from 'path'
import generate from 'pg-typegen'
;(async () => {
  const output = join(__dirname, 'entities.ts')
  await generate({ connection: 'postgres://username:password@localhost:5432/database', output })
})()
```

### Loading database config

#### from .env file
```
export $(grep -v '^#' .env | xargs) && pg-typegen -o ./entities.ts postgres://$DB_USERNAME:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME
```

#### from json file
```
pg-typegen -o ./entities.ts postgres://$(jq -r '.DB.USERNAME' config.json):$(jq -r '.DB.PASSWORD' config.json)@$(jq -r '.DB.HOST' config.json):$(jq -r '.DB.PORT' config.json)/$(jq -r '.DB.NAME' config.json)
```


## Run tests

```sh
docker-compose up -d
npm test
```

## Contributing

Contributions, issues and feature requests are welcome!

## License

Copyright © 2020 [Aldis Ameriks](https://github.com/aldis-ameriks).<br />
This project is [MIT](https://github.com/aldis-ameriks/pg-typegen/blob/master/LICENSE) licensed.

