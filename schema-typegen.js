#! /usr/bin/env node

'use strict'

const fs = require('fs')
const path = require('path')
const xargv = require('cross-argv')
const minimist = require('minimist')
const help = fs.readFileSync(path.join(__dirname, 'help.txt'), 'utf8')
const typescript = require('./lib/typescript')
const postgres = require('./lib/postgres')

const defaultOpts = {
  suffix: 'Entity',
  noSemi: false,
  semicolons: true,
  type: false,
  optionals: false,
  pascalEnums: false,
  bigint: false,
  dateAsString: false,
  schema: 'public',
  output: undefined,
  exclude: '',
  header: ''
}

function parseArguments (argvs) {
  const argv = minimist(argvs, {
    boolean: ['type', 'noSemi', 'bigint', 'date-as-string', 'semicolons', 'version', 'optionals', 'ssl', 'pascal-enums'],
    alias: {
      suffix: 'f',
      schema: 's',
      output: 'o',
      exclude: 'e',
      help: 'h',
      version: 'v',
      header: 'h',
      pascalEnums: 'pascal-enums'
    },
    default: defaultOpts
  })

  if (argv.noSemi) {
    argv.semicolons = false
  }

  argv.connection = argv._[0]
  argv.exclude = argv.exclude.split(',')

  if (argv.version) {
    console.log('schema-typegen', 'v' + require('./package').version)
    return
  }

  if (!argv.connection || argv.help) {
    console.error(help)
    return
  }

  return argv
}

async function generateSchema (opts) {
  opts = { ...defaultOpts, exclude: [], ...opts }
  const schema = await postgres(opts)
  const types = await typescript(opts, schema)
  if (opts.output) {
    fs.writeFileSync(opts.output, types)
    return `✔ Generated types from ${schema.tables.length} tables and ${schema.enums.length} enums`
  } else {
    return types
  }
}

if (require.main === module) {
  (async () => {
    const argv = xargv(process.argv.slice(2))
    const opts = parseArguments(argv)

    if (!opts) {
      return
    }

    const result = await generateSchema(opts)
    console.log(result)
  })()
}

module.exports = generateSchema
