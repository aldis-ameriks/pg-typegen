const { test } = require('tap')
const fs = require('fs')
const path = require('path')

const generate = require('../schema-typegen')
const { getTestPostgresConnectionString } = require('./helpers/setup-postgres')

const connection = getTestPostgresConnectionString()
const ssl = process.env.DATABASE_SSL_ENABLED === 'true'

test('generates types as return value', async (t) => {
  t.plan(1)

  const result = await generate({ connection, ssl })
  t.matchSnapshot(result)
})

test('generates types to file', async (t) => {
  t.plan(2)

  const outputPath = path.join(__dirname, './test-entities.ts')
  const result = await generate({ connection, ssl, output: outputPath })
  const content = fs.readFileSync(outputPath, 'utf8')
  t.matchSnapshot(content)
  t.matchSnapshot(result)
  fs.unlinkSync(outputPath)
})

test('returns help when missing connection', async (t) => {
  t.plan(1)

  const result = await generate()
  t.matchSnapshot(result)
})

test('returns help when missing connection', async (t) => {
  t.plan(1)

  const result = await generate({})
  t.matchSnapshot(result)
})
