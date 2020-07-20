'use strict'

const childProcess = require('child_process')
const fs = require('fs')
const path = require('path')
const eol = require('eol')
const { test } = require('tap')
const { getTestPostgresConnectionString } = require('./helpers/setup-postgres')
require('../schema-typegen')

const connection = getTestPostgresConnectionString()
const ssl = process.env.DATABASE_SSL_ENABLED === 'true'

test('help', t => {
  t.plan(1)

  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'schema-typegen.js'), '-h'], {
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
    t.matchSnapshot(eol.lf(result.data))
  })
})

test('version', t => {
  t.plan(1)

  t.cleanSnapshot = s => s.replace(/v[0-9.]+/g, 'v{v}')

  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'schema-typegen.js'), '-v'], {
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
    t.matchSnapshot(eol.lf(result.data))
  })
})

test('missing connection string', t => {
  t.plan(1)

  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'schema-typegen.js')], {
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
    t.matchSnapshot(eol.lf(result.data))
  })
})

test('generates types stdout', t => {
  t.plan(1)

  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'schema-typegen.js'), connection, ssl ? '--ssl' : ''], {
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
    t.matchSnapshot(eol.lf(result.data))
  })
})

test('generates types to file', t => {
  t.plan(1)

  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'schema-typegen.js'), '-o', './entities.ts', connection, ssl ? '--ssl' : ''], {
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

test('generates types with exclusion', t => {
  t.plan(1)

  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'schema-typegen.js'), connection, ssl ? '--ssl' : '', '-e', 'types,snake_test'], {
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
    t.matchSnapshot(eol.lf(result.data))
  })
})

test('generates types with header', t => {
  t.plan(1)

  const child = childProcess.spawn(process.execPath, [path.join(__dirname, '..', 'schema-typegen.js'), connection, ssl ? '--ssl' : '', '-h', '/* eslint-disable */'], {
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
    t.matchSnapshot(eol.lf(result.data))
  })
})
