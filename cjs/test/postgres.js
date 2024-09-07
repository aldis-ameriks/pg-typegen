const getSchemaDefinition = require('../src/postgres.js')
const { getTestPostgresConnectionString } = require('./helpers/setup-postgres.js')
const test = require('node:test')
const assert = require('node:assert/strict')

test('retrieves database schema', async t => {
  const connection = getTestPostgresConnectionString()
  const ssl = process.env.DATABASE_SSL_ENABLED === 'true'

  const opts = { schema: 'public', connection, ssl }
  const result = await getSchemaDefinition(opts)
  t.assert.snapshot(result)
})

test('returns typeMapping with int8 to string mapping', async t => {
  const connection = getTestPostgresConnectionString()
  const ssl = process.env.DATABASE_SSL_ENABLED === 'true'

  const opts = { schema: 'public', connection, ssl, bigint: false }
  const result = await getSchemaDefinition(opts)
  t.assert.snapshot(result)
})

test('returns typeMapping with int8 to bigint mapping', async t => {
  const connection = getTestPostgresConnectionString()
  const ssl = process.env.DATABASE_SSL_ENABLED === 'true'

  const opts = { schema: 'public', connection, ssl, bigint: true }
  const result = await getSchemaDefinition(opts)
  t.assert.snapshot(result)
})

test('returns typeMapping with date to javascript Date mapping', async t => {
  const connection = getTestPostgresConnectionString()
  const ssl = process.env.DATABASE_SSL_ENABLED === 'true'

  const opts = { schema: 'public', connection, ssl, dateAsString: false }
  const result = await getSchemaDefinition(opts)
  t.assert.snapshot(result)
})

test('returns typeMapping with date to string mapping', async t => {
  const connection = getTestPostgresConnectionString()
  const ssl = process.env.DATABASE_SSL_ENABLED === 'true'

  const opts = { schema: 'public', connection, ssl, dateAsString: true }
  const result = await getSchemaDefinition(opts)
  t.assert.snapshot(result)
})

test('uses correct postgres opts', () => {
  let result = getSchemaDefinition.getPostgresOpts({})
  assert.ok(result === false)

  result = getSchemaDefinition.getPostgresOpts({ ssl: false })
  assert.ok(result === false)

  result = getSchemaDefinition.getPostgresOpts({ ssl: true })
  assert.deepEqual(result, { ssl: { rejectUnauthorized: false } })
})
