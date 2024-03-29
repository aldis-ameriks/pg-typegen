import t from 'tap'
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

import generate from '../src/index.js'
import { getTestPostgresConnectionString } from './helpers/setup-postgres.js'

const connection = getTestPostgresConnectionString()
const ssl = process.env.DATABASE_SSL_ENABLED === 'true'

t.test('generates types as return value', async (t) => {
  const result = await generate({ connection, ssl })
  t.matchSnapshot(result)
})

t.test('generates types with insert types', async (t) => {
  const result = await generate({ connection, ssl, insertTypes: true })
  t.matchSnapshot(result)
})

t.test('generates types with comments', async (t) => {
  const result = await generate({ connection, ssl, comments: true })
  t.matchSnapshot(result)
})

t.test('generates types with comments and insert types', async (t) => {
  const result = await generate({ connection, ssl, comments: true, insertTypes: true })
  t.matchSnapshot(result)
})

t.test('generates types to file', async (t) => {
  const outputPath = path.join(url.fileURLToPath(new URL('.', import.meta.url)), './test-entities.ts')
  const result = await generate({ connection, ssl, output: outputPath })
  const content = fs.readFileSync(outputPath, 'utf8')
  t.matchSnapshot(content)
  t.matchSnapshot(result)
  fs.unlinkSync(outputPath)
})

t.test('returns help when missing connection', async (t) => {
  const result = await generate()
  t.matchSnapshot(result)
})

t.test('returns help when missing connection', async (t) => {
  const result = await generate({})
  t.matchSnapshot(result)
})

t.test('generates types with table name prefix', async (t) => {
  const result = await generate({ connection, ssl, appendTableNamePrefixedColumns: true })
  t.matchSnapshot(result)
})

t.test('generates types with optionals and with table name prefix', async (t) => {
  const result = await generate({ connection, ssl, optionals: true, appendTableNamePrefixedColumns: true })
  t.matchSnapshot(result)
})

t.test('allows hooking into schema result', async (t) => {
  let result
  await generate({
    connection,
    ssl,
    onSchema: (schema) => {
      result = schema
    }
  })
  t.matchSnapshot(result)
})

t.test('allows hooking into type result', async (t) => {
  let result
  await generate({
    connection,
    ssl,
    insertTypes: true,
    onTypes: (typeMapping) => {
      result = typeMapping
    }
  })
  t.matchSnapshot(result)
})
