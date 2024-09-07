const childProcess = require('node:child_process')
const fs = require('node:fs')
const path = require('node:path')
const { getTestPostgresConnectionString } = require('./helpers/setup-postgres.js')
const test = require('node:test')
const assert = require('node:assert/strict')

const connection = getTestPostgresConnectionString()
const ssl = process.env.DATABASE_SSL_ENABLED === 'true'

test('help', t => {
  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'src', 'index.js'), '--help'], {
    cwd: __dirname,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  })

  const result = { data: '' }
  child.stdout.on('data', data => {
    result.data += data.toString()
  })

  child.on('close', () => {
    t.assert.snapshot(result)
  })
})

test('version', t => {
  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'src', 'index.js'), '--version'], {
    cwd: __dirname,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  })

  const result = { data: '' }
  child.stdout.on('data', data => {
    result.data += data.toString()
  })

  child.on('close', () => {
    assert.ok(/v[0-9.]+/.test(result.data))
  })
})

test('missing connection string', t => {
  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'src', 'index.js')], {
    cwd: __dirname,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  })

  const result = { data: '' }
  child.stdout.on('data', data => {
    result.data += data.toString()
  })

  child.on('close', () => {
    t.assert.snapshot(result)
  })
})

test('generates types stdout', t => {
  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'src', 'index.js'), connection, ssl ? '--ssl' : ''], {
    cwd: __dirname,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  })

  const result = { data: '' }
  child.stdout.on('data', data => {
    result.data += data.toString()
  })

  child.on('close', () => {
    t.assert.snapshot(result)
  })
})

test('generates types to file', t => {
  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'src', 'index.js'), '-o', './entities.ts', connection, ssl ? '--ssl' : ''], {
    cwd: __dirname,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  })

  child.on('close', () => {
    const outputPath = path.join(__dirname, './entities.ts')
    const result = fs.readFileSync(outputPath, 'utf8')
    t.assert.snapshot(result)
    fs.unlinkSync(outputPath)
  })
})

test('reports success to stdout', t => {
  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'src', 'index.js'), '-o', './entities.ts', connection, ssl ? '--ssl' : ''], {
    cwd: __dirname,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  })

  const result = { data: '' }
  child.stdout.on('data', data => {
    result.data += data.toString()
  })

  child.on('close', () => {
    assert.equal(result.data, '✔ Generated types from 10 tables and 4 enums\n')
  })
})

test('generates types with exclusion', t => {
  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'src', 'index.js'), connection, ssl ? '--ssl' : '', '-e', 'types,snake_test'], {
    cwd: __dirname,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  })

  const result = { data: '' }
  child.stdout.on('data', data => {
    result.data += data.toString()
  })

  child.on('close', () => {
    t.assert.snapshot(result.data)
  })
})

test('generates types with header', t => {
  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'src', 'index.js'), connection, ssl ? '--ssl' : '', '-h', '/* eslint-disable */'], {
    cwd: __dirname,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  })

  const result = { data: '' }
  child.stdout.on('data', data => {
    result.data += data.toString()
  })

  child.on('close', () => {
    t.assert.snapshot(result.data)
  })
})

test('generates types with pascal case enums', t => {
  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'src', 'index.js'), connection, ssl ? '--ssl' : '', '--pascal-enums'], {
    cwd: __dirname,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  })

  const result = { data: '' }
  child.stdout.on('data', data => {
    result.data += data.toString()
  })

  child.on('close', () => {
    t.assert.snapshot(result.data)
  })
})

test('generates types with noSemi option', t => {
  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'src', 'index.js'), connection, ssl ? '--ssl' : '', '--noSemi'], {
    cwd: __dirname,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  })

  const result = { data: '' }
  child.stdout.on('data', data => {
    result.data += data.toString()
  })

  child.on('close', () => {
    t.assert.snapshot(result.data)
  })
})

test('generates types with no-semicolons option', t => {
  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'src', 'index.js'), connection, ssl ? '--ssl' : '', '--no-semicolons'], {
    cwd: __dirname,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  })

  const result = { data: '' }
  child.stdout.on('data', data => {
    result.data += data.toString()
  })

  child.on('close', () => {
    t.assert.snapshot(result.data)
  })
})

test('generates types with semicolons option', t => {
  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'src', 'index.js'), connection, ssl ? '--ssl' : '', '--semicolons'], {
    cwd: __dirname,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  })

  const result = { data: '' }
  child.stdout.on('data', data => {
    result.data += data.toString()
  })

  child.on('close', () => {
    t.assert.snapshot(result.data)
  })
})

test('generates types with bigint option', t => {
  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'src', 'index.js'), connection, ssl ? '--ssl' : '', '--bigint'], {
    cwd: __dirname,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  })

  const result = { data: '' }
  child.stdout.on('data', data => {
    result.data += data.toString()
  })

  child.on('close', () => {
    t.assert.snapshot(result.data)
  })
})

test('generates types with types option', t => {
  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'src', 'index.js'), connection, ssl ? '--ssl' : '', '--type'], {
    cwd: __dirname,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  })

  const result = { data: '' }
  child.stdout.on('data', data => {
    result.data += data.toString()
  })

  child.on('close', () => {
    t.assert.snapshot(result.data)
  })
})

test('generates types with insert types', t => {
  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'src', 'index.js'), connection, ssl ? '--ssl' : '', '--insert-types'], {
    cwd: __dirname,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  })

  const result = { data: '' }
  child.stdout.on('data', data => {
    result.data += data.toString()
  })

  child.on('close', () => {
    t.assert.snapshot(result.data)
  })
})

test('generates table names', t => {
  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'src', 'index.js'), connection, ssl ? '--ssl' : '', '--table-names'], {
    cwd: __dirname,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  })

  const result = { data: '' }
  child.stdout.on('data', data => {
    result.data += data.toString()
  })

  child.on('close', () => {
    t.assert.snapshot(result.data)
  })
})

test('generates view names', t => {
  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'src', 'index.js'), connection, ssl ? '--ssl' : '', '--view-names'], {
    cwd: __dirname,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  })

  const result = { data: '' }
  child.stdout.on('data', data => {
    result.data += data.toString()
  })

  child.on('close', () => {
    t.assert.snapshot(result.data)
  })
})

test('sends error to stderr', t => {
  const invalidConnection = 'postgres://postgres:postgres@0.0.0.0:1/test_db'
  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'src', 'index.js'), '-o', './entities.ts', invalidConnection, ssl ? '--ssl' : ''], {
    cwd: __dirname,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  })

  const result = { data: '' }
  child.stderr.on('data', data => {
    result.data += data.toString()
  })

  child.on('close', () => {
    assert.ok(result.data.includes('Error'), `${result.data} is not the expected error`)
  })
})
