/* eslint-disable */
import { expectAssignable, expectError, expectType } from 'tsd'
import generate, { Options } from '../..'

const options = {
  connection: 'connection-string',
  bigint: false,
  dateAsString: false,
  exclude: ['foo'],
  header: 'foo',
  optionals: false,
  output: 'foo',
  pascalEnums: false,
  schema: 'foo',
  semicolons: false,
  ssl: false,
  suffix: 'foo',
  type: false,
  insertTypes: true,
  tableNames: true
}

expectAssignable<Options>(options)
expectType<Promise<string>>(generate(options))
generate(options)

expectError(generate())
expectError(generate({}))
expectError(generate({ connection: 123 }))
