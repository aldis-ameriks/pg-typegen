import childProcess from 'node:child_process'
import fs from 'node:fs'
import url from 'node:url'
import path from 'node:path'
import t from 'tap'
import { getTestPostgresConnectionString } from './helpers/setup-postgres.js'

const connection = getTestPostgresConnectionString()
const ssl = process.env.DATABASE_SSL_ENABLED === 'true'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

t.test('help', t => {
  t.plan(1)

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
    t.matchSnapshot(result.data)
  })
})

t.test('version', t => {
  t.plan(1)

  t.cleanSnapshot = s => s.replace(/v[0-9.]+/g, 'v{v}')

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
    t.matchSnapshot(result.data)
  })
})

t.test('missing connection string', t => {
  t.plan(1)

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
    t.matchSnapshot(result.data)
  })
})

t.test('generates types stdout', t => {
  t.plan(1)

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
    t.matchSnapshot(result.data)
  })
})

t.test('generates types to file', t => {
  t.plan(1)

  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'src', 'index.js'), '-o', './entities.ts', connection, ssl ? '--ssl' : ''], {
    cwd: __dirname,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  })

  child.on('close', () => {
    const outputPath = path.join(__dirname, './entities.ts')
    const result = fs.readFileSync(outputPath, 'utf8')
    t.matchSnapshot(result)
    fs.unlinkSync(outputPath)
  })
})

t.test('reports success to stdout', t => {
  t.plan(1)

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
    t.equal(result.data, '✔ Generated types from 10 tables and 4 enums\n')
  })
})

t.test('generates types with exclusion', t => {
  t.plan(1)

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
    t.matchSnapshot(result.data)
  })
})

t.test('generates types with header', t => {
  t.plan(1)

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
    t.matchSnapshot(result.data)
  })
})

t.test('generates types with pascal case enums', t => {
  t.plan(1)

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
    t.matchSnapshot(result.data)
  })
})

t.test('generates types with noSemi option', t => {
  t.plan(1)

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
    t.matchSnapshot(result.data)
  })
})

t.test('generates types with no-semicolons option', t => {
  t.plan(1)

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
    t.matchSnapshot(result.data)
  })
})

t.test('generates types with semicolons option', t => {
  t.plan(1)

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
    t.matchSnapshot(result.data)
  })
})

t.test('generates types with bigint option', t => {
  t.plan(1)

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
    t.matchSnapshot(result.data)
  })
})

t.test('generates types with types option', t => {
  t.plan(1)

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
    t.matchSnapshot(result.data)
  })
})

t.test('generates types with insert types', t => {
  t.plan(1)

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
    t.matchSnapshot(result.data)
  })
})

t.test('generates table names', t => {
  t.plan(1)

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
    t.matchSnapshot(result.data)
  })
})

t.test('generates view names', t => {
  t.plan(1)

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
    t.matchSnapshot(result.data)
  })
})

t.test('sends error to stderr', t => {
  t.plan(1)
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
    t.ok(result.data.includes('Error'), `${result.data} is not the expected error`)
  })
})
