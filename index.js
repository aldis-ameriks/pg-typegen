#! /usr/bin/env node

'use strict'

const fs = require('fs')
const { Command } = require('commander')
const packageJson = require('./package.json')
const typescript = require('./lib/typescript')
const postgres = require('./lib/postgres')

const program = new Command()
program
  .name('schema-typegen')
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
  .option('--pascal-enums', 'transform enum keys to pascal case', false)
  .option('--bigint', 'use bigint for int8 types instead of strings', false)
  .option('--date-as-string', 'use string for date types instead of javascript Date object', false)

program.on('--help', () => {
  console.log('')
  console.log('Example:')
  console.log('  $ schema-typegen -o ./entities.ts postgres://username:password@localhost:5432/database')
})

function parseArray (value) {
  return value.split(',')
}

async function generateSchema (opts) {
  const defaultOpts = program.parse([]).opts()
  opts = { ...defaultOpts, ...opts }

  if (!opts.connection) {
    const help = program.helpInformation()
    console.log(help)
    return help
  }

  const schema = await postgres(opts)
  const types = await typescript(opts, schema)
  if (opts.output && opts.output !== 'stdout') {
    fs.writeFileSync(opts.output, types)
    return `✔ Generated types from ${schema.tables.length} tables and ${schema.enums.length} enums`
  } else {
    return types
  }
}

if (require.main === module) {
  (async () => {
    const command = program.parse(process.argv)
    const opts = command.opts()
    const args = command.args

    if (!args || !args.length) {
      program.help()
    }

    opts.connection = args[0]

    const result = await generateSchema(opts)
    console.log(result)
  })()
}

module.exports = generateSchema
