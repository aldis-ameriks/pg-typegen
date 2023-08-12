#! /usr/bin/env node

const fs = require('node:fs')
const { Command } = require('commander')
const typescript = require('./typescript.js')
const postgres = require('./postgres.js')

const packageJson = require('../../package.json')

const program = new Command()
program
  .name('pg-typegen')
  .version(`v${packageJson.version}`)
  .arguments('<connection>')
  .option('-f, --suffix <suffix>', 'suffix to append to generated table type, e.g. item -> ItemEntity', 'Entity')
  .option('-s, --schema <schema>', 'schema', 'public')
  .option('-h, --header <header>', 'header content', '')
  .option('-o, --output <output>', 'file output path', 'stdout')
  .option('-e, --exclude <exclude>', 'excluded tables and enums as comma separated string e.g. knex_migrations,knex_migrations_lock', parseArray, [])
  .option('--type', 'use type definitions instead of interfaces in generated output', false)
  .option('--noSemi, --no-semicolons', 'omit semicolons in generated types', false)
  .option('--ssl', 'use ssl', false)
  .option('--optionals', 'use optionals "?" instead of null', false)
  .option('--comments', 'generate table and column comments', false)
  .option('--pascal-enums', 'transform enum keys to pascal case', false)
  .option('--bigint', 'use bigint for int8 types instead of strings', false)
  .option('--date-as-string', 'use string for date types instead of javascript Date object', false)
  .option('--insert-types', 'generate separate insert types with optional fields for columns allowing NULL value or having default values', false)
  .option('--table-names', 'generate string literal type with all table names', false)

program.on('--help', () => {
  console.log('')
  console.log('Example:')
  console.log('  $ pg-typegen -o ./entities.ts postgres://username:password@localhost:5432/database')
})

function parseArray (value) {
  return value.split(',')
}

async function generateSchema (opts) {
  let argv = process.argv
  if (process.argv.length === 2) {
    // Starting from commander v8, arguments are mandatory.
    // We're adding placeholder argument to be able to parse and get the default args.
    argv = [...process.argv, '']
  }
  const defaultOpts = program.parse(argv).opts()
  opts = { ...defaultOpts, ...opts }

  if (!opts.connection) {
    const help = program.helpInformation()
    console.log(help)
    return help
  }

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

if (require.main === module) {
  (async () => {
    if (process.argv.length === 2) {
      // Calling script without any arguments, so we're showing help and exiting.
      program.help()
    }

    const command = program.parse(process.argv)
    const opts = command.opts()
    const args = command.args

    opts.connection = args[0]

    const result = await generateSchema(opts)
    console.log(result)
  })()
}

module.exports = generateSchema
