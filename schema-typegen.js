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
  type: false,
  schema: 'public',
  output: undefined,
  exclude: ''
}

function parseArguments (argvs) {
  const argv = minimist(argvs, {
    boolean: ['type', 'noSemi', 'version', 'ssl'],
    alias: {
      suffix: 'f',
      schema: 's',
      output: 'o',
      exclude: 'e',
      help: 'h',
      version: 'v'
    },
    default: defaultOpts
  })

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

if (require.main === module) {
  (async () => {
    const argv = xargv(process.argv.slice(2))
    const opts = parseArguments(argv)

    if (!opts) {
      return
    }

    const schema = await postgres(opts)
    const types = await typescript(opts, schema)
    if (opts.output) {
      fs.writeFileSync(opts.output, types)
    } else {
      console.log(types)
    }
  })()
}

module.exports = {
  typescript,
  postgres
}
