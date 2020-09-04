'use strict'

const { test } = require('tap')
const getSchemaDefinition = require('../lib/postgres')
const { getTestPostgresConnectionString } = require('./helpers/setup-postgres')

test('retrieves database schema', async t => {
  t.plan(1)

  const connection = getTestPostgresConnectionString()
  const ssl = process.env.DATABASE_SSL_ENABLED === 'true'

  const opts = { schema: 'public', connection, ssl }
  const result = await getSchemaDefinition(opts)
  t.matchSnapshot(result)
})

test('returns typeMapping with int8 to string mapping', async t => {
  t.plan(1)

  const connection = getTestPostgresConnectionString()
  const ssl = process.env.DATABASE_SSL_ENABLED === 'true'

  const opts = { schema: 'public', connection, ssl, bigint: false }
  const result = await getSchemaDefinition(opts)
  t.matchSnapshot(result)
})

test('returns typeMapping with int8 to bigint mapping', async t => {
  t.plan(1)

  const connection = getTestPostgresConnectionString()
  const ssl = process.env.DATABASE_SSL_ENABLED === 'true'

  const opts = { schema: 'public', connection, ssl, bigint: true }
  const result = await getSchemaDefinition(opts)
  t.matchSnapshot(result)
})

test('returns typeMapping with date to javascript Date mapping', async t => {
  t.plan(1)

  const connection = getTestPostgresConnectionString()
  const ssl = process.env.DATABASE_SSL_ENABLED === 'true'

  const opts = { schema: 'public', connection, ssl, dateAsString: false }
  const result = await getSchemaDefinition(opts)
  t.matchSnapshot(result)
})

test('returns typeMapping with date to string mapping', async t => {
  t.plan(1)

  const connection = getTestPostgresConnectionString()
  const ssl = process.env.DATABASE_SSL_ENABLED === 'true'

  const opts = { schema: 'public', connection, ssl, dateAsString: true }
  const result = await getSchemaDefinition(opts)
  t.matchSnapshot(result)
})

test('uses correct postgres opts', t => {
  t.plan(3)

  let result = getSchemaDefinition.getPostgresOpts({})
  t.equal(result, false)

  result = getSchemaDefinition.getPostgresOpts({ ssl: false })
  t.equal(result, false)

  result = getSchemaDefinition.getPostgresOpts({ ssl: true })
  t.deepEqual(result, { ssl: { rejectUnauthorized: false } })
})
