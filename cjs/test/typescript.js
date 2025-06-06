const typescript = require('../src/typescript.js')
const test = require('node:test')

const tables = [
  {
    name: 'known',
    columns: [
      { name: 'known1', type: 'int4', isNullable: false },
      { name: 'known2', type: 'int4', isNullable: true },
      { name: 'known3', type: 'int2', isNullable: true },
      { name: 'known4', type: 'int2', isNullable: false },
      { name: 'known5', type: 'int8', isNullable: true },
      { name: 'known6', type: 'int8', isNullable: false }
    ]
  },
  {
    name: 'unknown',
    columns: [
      { name: 'unknown1', type: 'unknown', isNullable: true },
      { name: 'unknown2', type: 'unknown', isNullable: false },
      { name: 'unknown3', type: '_unknown', isNullable: true },
      { name: 'unknown4', type: '_unknown', isNullable: false }
    ]
  },
  {
    name: 'snake_case',
    columns: [
      { name: 'snake_case1', type: 'int4', isNullable: true },
      { name: 'snake_case2', type: 'int4', isNullable: false }
    ]
  },
  {
    name: 'kebab-case',
    columns: [
      { name: 'kebab-case1', type: 'int4', isNullable: true },
      { name: 'kebab-case2', type: 'int4', isNullable: false }
    ]
  },
  {
    name: 'white space',
    columns: [
      { name: 'white space 1', type: 'int2', isNullable: true },
      { name: 'white space 2', type: 'int2', isNullable: false }
    ]
  },
  {
    name: 'custom',
    columns: [
      { name: 'custom1', type: 'custom_type' },
      { name: 'custom2', type: 'custom-type' },
      { name: 'custom3', type: 'custom type' },
      { name: 'custom4', type: '_custom_type' },
      { name: 'custom5', type: '_custom-type' },
      { name: 'custom6', type: '_custom type' }
    ]
  },
  { name: 'empty', columns: [] },
  { name: 'apples', columns: [] },
  { name: 'addresses', columns: [] },
  { name: 'entities', columns: [{ name: 'duplicate', type: 'int2' }, { name: 'duplicate', type: 'int2' }] },
  { name: 'UpperCase', columns: [{ name: 'duplicate', type: 'int2' }, { name: 'duplicate', type: 'int2' }] },
  { name: 'defaults_no_columns', columns: [] },
  {
    name: 'defaults',
    columns: [
      { name: 'one', type: 'int4', hasDefault: true },
      { name: 'two', type: 'int4', hasDefault: true, isNullable: true }
    ]
  },
  {
    name: 'view',
    isView: true,
    columns: [
      { name: 'one', type: 'int4', hasDefault: true },
      { name: 'two', type: 'int4', hasDefault: true, isNullable: true }
    ]
  },
  {
    name: 'another-view',
    isView: true,
    columns: [
      { name: 'one', type: 'int4', hasDefault: true },
      { name: 'two', type: 'int4', hasDefault: true, isNullable: true }
    ]
  }
]

const enums = [
  { name: 'custom_enum', values: ['value_one', 'value_two', 'foo bar', 'foo-bar2', 'foo   bar3', 'foo----bar4', 'foo____bar5', 'foo  ---- ____ ---   bar6'] },
  { name: 'empty', values: [] },
  { name: 'kebab-case1', values: [] },
  { name: 'kebab-case2', values: ['kebab-case-value'] },
  { name: 'white space', values: ['white space value'] },
  { name: 'apples', values: [] },
  { name: 'custom_type', values: ['foo', 'bar'] },
  { name: 'custom-type', values: ['foo', 'bar'] },
  { name: 'custom type', values: ['foo', 'bar'] }
]

const typeMapping = {
  number: ['int4', 'int2'],
  string: ['int8']
}

const opts = {
  connection: 'postgres://username:password@localhost:5422/database',
  suffix: 'Entity',
  schema: 'public',
  output: './entities.ts',
  semicolons: true
}

test('using types', t => {
  t.plan(2)
  let result = typescript({ ...opts, type: true, semicolons: true }, { tables, typeMapping, enums })
  t.assert.snapshot(result.types)

  result = typescript({ ...opts, type: true, semicolons: false }, { tables, typeMapping, enums })
  t.assert.snapshot(result.types)
})

test('using interfaces', t => {
  t.plan(2)
  let result = typescript({ ...opts, type: false, semicolons: true }, { tables, typeMapping, enums })
  t.assert.snapshot(result.types)

  result = typescript({ ...opts, type: false, semicolons: false }, { tables, typeMapping, enums })
  t.assert.snapshot(result.types)
})

test('with custom suffix', t => {
  const result = typescript({ ...opts, suffix: 'Record' }, { tables, typeMapping, enums })
  t.assert.snapshot(result.types)
})

test('with header', t => {
  const result = typescript({ ...opts, header: '/* eslint-disable */' }, { tables, typeMapping, enums })
  t.assert.snapshot(result.types)
})

test('with optionals', t => {
  const result = typescript({ ...opts, optionals: true }, { tables, typeMapping, enums })
  t.assert.snapshot(result.types)
})

test('without enums', t => {
  const result = typescript({ ...opts, optionals: true }, { tables, typeMapping, enums: [] })
  t.assert.snapshot(result.types)
})

test('with pascal case enums', t => {
  const result = typescript({ ...opts, pascalEnums: true }, { tables, typeMapping, enums })
  t.assert.snapshot(result.types)
})

test('with generated insert types', t => {
  const result = typescript({ ...opts, insertTypes: true }, { tables, typeMapping, enums })
  t.assert.snapshot(result.types)
})

test('with generated insert types with optionals', t => {
  const result = typescript({ ...opts, insertTypes: true, optionals: true }, { tables, typeMapping, enums })
  t.assert.snapshot(result.types)
})

test('with table string literal', t => {
  const result = typescript({ ...opts, tableNames: true }, { tables, typeMapping, enums })
  t.assert.snapshot(result.types)
})

test('viewNames with views', t => {
  const result = typescript({ ...opts, viewNames: true }, { tables, typeMapping, enums })
  t.assert.snapshot(result.types)
})

test('viewNames with single view', t => {
  const tablesWithSingleView = [
    {
      name: 'view',
      isView: true,
      columns: [
        { name: 'one', type: 'int4', hasDefault: true }
      ]
    }
  ]
  const result = typescript({ ...opts, viewNames: true }, { tables: tablesWithSingleView, typeMapping, enums })
  t.assert.snapshot(result.types)
})

test('viewNames without views', t => {
  const tablesWithoutView = [
    {
      name: 'table',
      isView: false,
      columns: [
        { name: 'one', type: 'int4', hasDefault: true }
      ]
    }
  ]
  const result = typescript({ ...opts, viewNames: true }, { tables: tablesWithoutView, typeMapping, enums })
  t.assert.snapshot(result.types)
})
