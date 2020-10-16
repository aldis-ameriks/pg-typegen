'use strict'

const postgres = require('postgres')

const typeMapping = {
  string: ['bpchar', 'char', 'varchar', 'text', 'numeric', 'uuid', 'bytea', 'inet', 'time', 'timetz', 'interval', 'name'],
  number: ['int2', 'int4', 'float4', 'float8', 'money', 'oid'],
  boolean: ['bool'],
  bigint: [],
  object: ['json', 'jsonb'],
  Date: ['timestamp', 'timestamptz'],
  'Array<string>': ['_bpchar', '_char', '_varchar', '_text', '_numeric', '_uuid', '_bytea', '_inet', '_time', '_timetz', '_interval', '_name'],
  'Array<number>': ['_int2', '_int4', '_float4', '_float8', '_money', '_oid'],
  'Array<boolean>': ['_bool'],
  'Array<object>': ['_json', '_jsonb'],
  'Array<Date>': ['_timestamp', '_timestamptz'],
  'Array<bigint>': []
}

function getTableDefinitions (sql, schema) {
  return sql`
    SELECT table_name AS name,
           jsonb_agg(
                   DISTINCT jsonb_build_object(
                   'name', column_name,
                   'type', udt_name,
                   'isNullable', is_nullable::boolean
               )) AS columns
    FROM information_schema.columns
    WHERE table_schema = ${schema}
    GROUP BY table_name
  `
}

function getEnumDefinitions (sql, schema) {
  return sql`
    SELECT t.typname AS name, jsonb_agg(DISTINCT e.enumlabel) AS values
    FROM pg_type t
    INNER JOIN pg_enum e ON t.oid = e.enumtypid
    INNER JOIN pg_catalog.pg_namespace n ON n.oid = t.typnamespace
    WHERE n.nspname = ${schema}
    GROUP BY name
  `
}

function getPostgresOpts (opts) {
  // rejectUnauthorized: false allows self signed certs
  return opts.ssl ? { ssl: { rejectUnauthorized: false } } : false
}

async function getSchemaDefinition (opts) {
  const { schema, connection, bigint, dateAsString } = opts
  if (bigint) {
    typeMapping.bigint.push('int8')
    typeMapping['Array<bigint>'].push('_int8')
  } else {
    typeMapping.string.push('int8')
    typeMapping['Array<string>'].push('_int8')
  }

  if (dateAsString) {
    typeMapping.string.push('date')
    typeMapping['Array<string>'].push('_date')
  } else {
    typeMapping.Date.push('date')
    typeMapping['Array<Date>'].push('_date')
  }

  const sql = postgres(connection, getPostgresOpts(opts))
  try {
    const [tables, enums] = await Promise.all([getTableDefinitions(sql, schema), getEnumDefinitions(sql, schema)])
    return { tables, enums, typeMapping }
  } catch (e) {
    console.error(e.toString())
  } finally {
    await sql.end()
  }
}

module.exports = getSchemaDefinition
module.exports.getPostgresOpts = getPostgresOpts
