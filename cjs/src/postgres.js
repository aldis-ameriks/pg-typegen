const postgres = require('postgres')

const typeMapping = {
  string: ['bpchar', 'char', 'varchar', 'text', 'numeric', 'money', 'uuid', 'bytea', 'inet', 'time', 'timetz', 'interval', 'name'],
  number: ['int2', 'int4', 'float4', 'float8', 'oid'],
  boolean: ['bool'],
  bigint: [],
  any: ['json', 'jsonb'],
  Date: ['timestamp', 'timestamptz'],
  'Array<string>': ['_bpchar', '_char', '_varchar', '_text', '_money', '_numeric', '_uuid', '_bytea', '_inet', '_time', '_timetz', '_interval', '_name'],
  'Array<number>': ['_int2', '_int4', '_float4', '_float8', '_oid'],
  'Array<boolean>': ['_bool'],
  'Array<any>': ['_json', '_jsonb'],
  'Array<Date>': ['_timestamp', '_timestamptz'],
  'Array<bigint>': []
}

function getTableDefinitions (sql, schema) {
  return sql`
      SELECT c.table_name AS name,
             obj_description(c.table_name::regclass) AS comment,
             t.table_type = 'VIEW' AS "isView",
             jsonb_agg(
                     DISTINCT jsonb_build_object(
                     'name', column_name,
                     'type', udt_name,
                     'defaultValue', column_default,
                     'hasDefault',
                     column_default IS NOT NULL OR (is_identity = 'YES' AND identity_generation = 'ALWAYS'),
                     'isNullable', is_nullable::boolean,
                     'comment', (
                         SELECT coalesce(pg_catalog.col_description(pc.oid, c.ordinal_position::int), '')
                         FROM pg_catalog.pg_class pc
                         WHERE pc.oid = c.table_name::regclass::oid
                           AND pc.relname = c.table_name
                     ),
                     'indices', (
                         array(
                                 SELECT jsonb_build_object(
                                                'name', i.relname,
                                                'isPrimaryKey', (
                                                    SELECT constraint_type
                                                    FROM information_schema.table_constraints tc
                                                    WHERE tc.constraint_name = i.relname
                                                      AND tc.constraint_type = 'PRIMARY KEY'
                                                ) IS NOT NULL
                                            )
                                 FROM pg_class t1,
                                      pg_class i,
                                      pg_index ix,
                                      pg_attribute a
                                 WHERE i.oid = ix.indexrelid
                                   AND t1.oid = ix.indrelid
                                   AND t1.relkind = 'r'
                                   AND a.attrelid = t1.oid
                                   AND a.attnum = ANY (ix.indkey)
                                   AND t1.relname = c.table_name
                                   AND a.attname = c.column_name
                             ))
                 )) AS columns
      FROM information_schema.columns c
           INNER JOIN information_schema.tables t ON t.table_name = c.table_name
      WHERE c.table_schema = ${schema}
        AND t.table_schema = ${schema}
      GROUP BY c.table_name, t.table_type
  `
}

async function getMaterializedViewDefinitions (sql, schema) {
  return sql`
      WITH materialized_views AS (
          SELECT matviewname
          FROM pg_matviews
          WHERE schemaname = ${schema}
      )
      SELECT pc.relname AS name,
             TRUE AS "isView",
             jsonb_agg(
                     DISTINCT jsonb_build_object(
                     'name', pa.attname,
                     'type', pt.typname,
                     'defaultValue', null,
                     'isNullable', NOT pa.attnotnull,
                     'comment', '',
                     'indices', '[]'::jsonb
                 )) AS columns
      FROM pg_attribute pa
           INNER JOIN pg_class pc ON pa.attrelid = pc.oid
           INNER JOIN pg_namespace pn ON pc.relnamespace = pn.oid
           INNER JOIN pg_type pt ON pa.atttypid = pt.oid
           INNER JOIN materialized_views mv ON pc.relname = mv.matviewname
      WHERE pa.attnum > 0
        AND NOT pa.attisdropped
        AND pn.nspname = ${schema}
      GROUP BY pc.relname;
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
  // rejectUnauthorized: false allows self-signed certs
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
    const [tables, enums, mViews] = await Promise.all([
      getTableDefinitions(sql, schema),
      getEnumDefinitions(sql, schema),
      getMaterializedViewDefinitions(sql, schema)
    ])

    return { tables: [...tables, ...mViews], enums, typeMapping }
  } catch (e) {
    console.error(e.toString())
  } finally {
    await sql.end()
  }
}

module.exports = getSchemaDefinition
module.exports.getPostgresOpts = getPostgresOpts
