'use strict'

function toPascalCase (value) {
  const replaced = value.replace(/((_|-|\s)\w)/g, (token) => token[1].toUpperCase())
  return replaced.charAt(0).toUpperCase() + replaced.slice(1)
}

function formatName (name) {
  if (name.match(/(-|\s)/g)) {
    name = `'${name}'`
  }
  return name
}

function semicolon (opts) {
  return opts.noSemi ? '' : ';'
}

function getColumnType (typeMapping, type, enums) {
  const result = Object.entries(typeMapping).find(([_key, values]) => values.includes(type))

  if (!result || !result[0]) {
    const customType = enums.find(entry => entry.name === (type.startsWith('_') ? type.slice(1) : type))
    if (customType) {
      return type.startsWith('_') ? `Array<${toPascalCase(type)}>` : toPascalCase(type)
    }
  }

  if (!result || !result[0]) {
    return type.startsWith('_') ? 'Array<any>' : 'any'
  }
  return result[0]
}

function getTableType (opts, tableName) {
  const { suffix } = opts

  let parsedTableName = toPascalCase(tableName)
  if (parsedTableName.endsWith('s')) {
    parsedTableName = parsedTableName.slice(0, -1)
  }

  if (opts.type) {
    return `export type ${parsedTableName}${suffix} = {`
  } else {
    return `export interface ${parsedTableName}${suffix} {`
  }
}

function generateTableTypes (opts, tables, typeMapping, enums) {
  return tables
    .filter(table => !opts.exclude.includes(table.name))
    .map(table => {
      let tableType = getTableType(opts, table.name)

      if (table.columns.length > 0) {
        tableType += '\n'
      }

      table.columns.forEach(tableColumn => {
        tableType += `  ${formatName(tableColumn.name)}${tableColumn.isNullable ? '?' : ''}: ${getColumnType(typeMapping, tableColumn.type, enums)}${semicolon(opts)}\n`
      })

      tableType += `}${semicolon(opts)}\n`
      return tableType
    }).join('\n')
}

function generateEnumTypes (opts, enums) {
  const enumTypes = enums
    .filter(entry => !opts.exclude.includes(entry.name))
    .map(entry => {
      let enumType = `export enum ${toPascalCase(entry.name)} {`

      if (entry.values.length > 0) {
        enumType += '\n'
      }

      entry.values.forEach(value => {
        enumType += `  ${formatName(value)} = '${value}',\n`
      })

      enumType += '}\n'
      return enumType
    })

  return enumTypes.join('\n')
}

function typescript (opts, schema) {
  const { tables, typeMapping, enums } = schema

  let result = ''
  result += generateEnumTypes(opts, enums)
  result += '\n'
  result += generateTableTypes(opts, tables, typeMapping, enums)
  return result
}

module.exports = typescript
