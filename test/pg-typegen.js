import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

import generate from '../src/index.js'
import { getTestPostgresConnectionString } from './helpers/setup-postgres.js'
import test from 'node:test'

const connection = getTestPostgresConnectionString()
const ssl = process.env.DATABASE_SSL_ENABLED === 'true'

test('generates types as return value', async (t) => {
  const result = await generate({ connection, ssl })
  t.assert.snapshot(result)
})

test('generates types with insert types', async (t) => {
  const result = await generate({ connection, ssl, insertTypes: true })
  t.assert.snapshot(result)
})

test('generates types with comments', async (t) => {
  const result = await generate({ connection, ssl, comments: true })
  t.assert.snapshot(result)
})

test('generates types with comments and insert types', async (t) => {
  const result = await generate({ connection, ssl, comments: true, insertTypes: true })
  t.assert.snapshot(result)
})

test('generates types to file', async (t) => {
  const outputPath = path.join(url.fileURLToPath(new URL('.', import.meta.url)), './test-entities.ts')
  const result = await generate({ connection, ssl, output: outputPath })
  const content = fs.readFileSync(outputPath, 'utf8')
  t.assert.snapshot(content)
  t.assert.snapshot(result)
  fs.unlinkSync(outputPath)
})

test('returns help when missing connection', async (t) => {
  const result = await generate()
  t.assert.snapshot(result)
})

test('returns help when missing connection', async (t) => {
  const result = await generate({})
  t.assert.snapshot(result)
})

test('generates types with table name prefix', async (t) => {
  const result = await generate({ connection, ssl, appendTableNamePrefixedColumns: true })
  t.assert.snapshot(result)
})

test('generates types with optionals and with table name prefix', async (t) => {
  const result = await generate({ connection, ssl, optionals: true, appendTableNamePrefixedColumns: true })
  t.assert.snapshot(result)
})

test('allows hooking into schema result', async (t) => {
  let result
  await generate({
    connection,
    ssl,
    onSchema: (schema) => {
      result = schema
    }
  })
  t.assert.snapshot(result)
})

test('allows hooking into type result', async (t) => {
  let result
  await generate({
    connection,
    ssl,
    insertTypes: true,
    onTypes: (typeMapping) => {
      result = typeMapping
    }
  })
  t.assert.snapshot(result)
})
