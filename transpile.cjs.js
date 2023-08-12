import fs from 'node:fs'
import path from 'node:path'

const root = 'cjs'
const directories = ['src', 'test']

fs.rmSync(root, { recursive: true, force: true })
fs.mkdirSync(root)

for (const directory of directories) {
  fs.mkdirSync(path.join(root, directory))
  parse(directory)
}

function parse (filepath) {
  const files = fs.readdirSync(filepath)

  for (const file of files) {
    if (file.endsWith('.js')) {
      fs.writeFileSync(
        path.join(root, filepath, file),
        transpile(fs.readFileSync(path.join(filepath, file), 'utf8'))
      )
      continue
    }

    if (file.endsWith('.ts')) {
      fs.writeFileSync(
        path.join(root, filepath, file),
        fs.readFileSync(path.join(filepath, file), 'utf8')
      )
      continue
    }

    const stat = fs.lstatSync(`${filepath}/${file}`)
    if (stat.isDirectory()) {
      fs.mkdirSync(path.join(root, filepath, file))
      parse(`${filepath}/${file}`)
    }
  }
}

fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify({ type: 'commonjs' }))

function transpile (content) {
  return content
    .replaceAll('const packageJson = JSON.parse(fs.readFileSync(new URL(\'../package.json\', import.meta.url)))', 'const packageJson = require(\'../../package.json\')')
    .replaceAll('import.meta.url === pathToFileURL(process.argv[1]).href', 'require.main === module')
    .replaceAll('const __dirname = url.fileURLToPath(new URL(\'.\', import.meta.url))\n', '')
    .replaceAll('url.fileURLToPath(new URL(\'.\', import.meta.url))', '__dirname')
    .replaceAll(', { getPostgresOpts }', '')
    .replaceAll('= getPostgresOpts(', '= getSchemaDefinition.getPostgresOpts(')
    .replaceAll('export default getSchemaDefinition', 'module.exports = getSchemaDefinition\nmodule.exports.getPostgresOpts = getPostgresOpts')
    .replaceAll('export function getPostgresOpts', 'function getPostgresOpts')
    .replaceAll('import { pathToFileURL } from \'node:url\'\n', '')
    .replaceAll('import url from \'node:url\'\n', '')

    .replace(/export default function ([^(]+)/, 'module.exports = $1;function $1')
    .replace(/export class ([a-z0-9_$]+)/gi, 'const $1 = module.exports.$1 = class $1')
    .replace(/export default /, 'module.exports = ')
    .replace(/export {/g, 'module.exports = {')
    .replace(/export const ([a-z0-9_$]+)/gi, 'const $1 = module.exports.$1')
    .replace(/export function ([a-z0-9_$]+)/gi, 'module.exports.$1 = $1;function $1')
    .replace(/export async function ([a-z0-9_$]+)/gi, 'module.exports.$1 = $1;async function $1')
    .replace(/import {([^{}]*?)} from (['"].*?['"])/gi, 'const {$1} = require($2)')
    .replace(/import (.*?) from (['"].*?['"])/gi, 'const $1 = require($2)')
    .replace(/import (['"].*?['"])/gi, 'require($1)')
}
