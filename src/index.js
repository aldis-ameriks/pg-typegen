#! /usr/bin/env node

import fs from 'node:fs'
import { parseArgs } from 'node:util'
import { pathToFileURL } from 'node:url'
import typescript from './typescript.js'
import postgres from './postgres.js'

const packageJson = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url)))

const options = {
  version: { type: 'boolean', short: 'V' },
  help: { type: 'boolean' },
  suffix: { type: 'string', short: 'f' },
  schema: { type: 'string', short: 's' },
  header: { type: 'string', short: 'h' },
  output: { type: 'string', short: 'o' },
  exclude: { type: 'string', short: 'e' },
  type: { type: 'boolean' },
  ssl: { type: 'boolean' },
  optionals: { type: 'boolean' },
  comments: { type: 'boolean' },
  semicolons: { type: 'boolean' },
  bigint: { type: 'boolean' },
  noSemi: { type: 'boolean' }, // TODO: Deprecate
  'no-semicolons': { type: 'boolean' }, // TODO: Deprecate
  'pascal-enums': { type: 'boolean' },
  'date-as-string': { type: 'boolean' },
  'insert-types': { type: 'boolean' },
  'table-names': { type: 'boolean' },
  'view-names': { type: 'boolean' }
}

const defaultOptions = {
  suffix: 'Entity',
  schema: 'public',
  header: '',
  output: 'stdout',
  exclude: [],
  type: false,
  semicolons: false,
  ssl: false,
  optionals: false,
  comments: false,
  pascalEnums: false,
  bigint: false,
  dateAsString: false,
  insertTypes: false,
  tableNames: false,
  viewNames: false,
  help: false,
  version: false
}

const help = `Usage: pg-typegen [options] <connection>

Options:
  -V, --version              output the version number
  -f, --suffix  <suffix>     suffix to append to generated table type, e.g. item -> ItemEntity (default: "Entity")
  -s, --schema  <schema>     schema (default: "public")
  -h, --header  <header>     header content (default: "")
  -o, --output  <output>     file output path (default: "stdout")
  -e, --exclude <exclude>    excluded tables and enums as comma separated string e.g. knex_migrations,knex_migrations_lock (default: [])
  --type                     use type definitions instead of interfaces in generated output (default: false)
  --semicolons               use semicolons in generated types (default: false)
  --ssl                      use ssl (default: false)
  --optionals                use optionals "?" instead of null (default: false)
  --comments                 generate table and column comments (default: false)
  --pascal-enums             transform enum keys to pascal case (default: false)
  --bigint                   use bigint for int8 types instead of strings (default: false)
  --date-as-string           use string for date types instead of javascript Date object (default: false)
  --insert-types             generate separate insert types with optional fields for columns allowing NULL value or having default values (default: false)
  --table-names              generate string literal type with all table names (default: false)
  --view-names               generate string literal type with all view names (default: false)
  --help                     display help for command

Example:
  $ pg-typegen -o ./entities.ts postgres://username:password@localhost:5432/database`

async function generateSchema (opts) {
  if (!opts || !opts.connection) {
    console.log(help)
    return
  }

  opts = { ...defaultOptions, ...opts }

  const schema = await postgres(opts)

  if (opts.onSchema) {
    opts.onSchema(schema)
  }

  schema.tables = schema.tables.filter(table => !opts.exclude.includes(table.name))
  schema.enums = schema.enums.filter(enums => !opts.exclude.includes(enums.name))

  const result = typescript(opts, schema)

  if (opts.onTypes) {
    opts.onTypes(result)
  }

  if (opts.output && opts.output !== 'stdout') {
    fs.writeFileSync(opts.output, result.types)
    return `✔ Generated types from ${schema.tables.length} tables and ${schema.enums.length} enums`
  } else {
    return result.types
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  (async () => {
    if (process.argv.length === 2) {
      // Calling script without any arguments, so we're showing help and exiting.
      console.log(help)
      return
    }

    const parsedArgs = parseArgs({ options, allowPositionals: true, args: process.argv })
    const opts = parsedArgs.values
    opts.connection = parsedArgs.positionals[2]

    let semicolons = opts.semicolons
    if (opts.noSemi !== undefined) {
      semicolons = !opts.noSemi
    } else if (opts['no-semicolons'] !== undefined) {
      semicolons = !opts['no-semicolons']
    }

    const parsedOpts = {
      suffix: opts.suffix,
      schema: opts.schema,
      header: opts.header,
      output: opts.output,
      exclude: opts.exclude ? opts.exclude.split(',').map(e => e.trim()).filter(Boolean) : [],
      type: opts.type,
      semicolons,
      ssl: opts.ssl,
      optionals: opts.optionals,
      comments: opts.comments,
      pascalEnums: opts['pascal-enums'],
      bigint: opts.bigint,
      dateAsString: opts['date-as-string'],
      insertTypes: opts['insert-types'],
      tableNames: opts['table-names'],
      viewNames: opts['view-names'],
      help: opts.help,
      version: opts.version,
      connection: opts.connection
    }

    const optsWithDefaults = {
      ...defaultOptions,
      ...Object.fromEntries(Object.entries(parsedOpts).filter(([, value]) => value !== undefined))
    }

    if (optsWithDefaults.help) {
      console.log(help)
      return
    }

    if (optsWithDefaults.version) {
      console.log(`v${packageJson.version}`)
      return
    }

    const result = await generateSchema(optsWithDefaults)
    console.log(result)
  })()
}

export default generateSchema
