export interface Schema {
  tables: {
    name: string;
    comment: string | null
    isView: boolean
    columns: Array<{
      name: string,
      type: string,
      comment: string,
      indices: Array<{ name: string, isPrimaryKey: boolean }>,
      hasDefault: boolean,
      isNullable: boolean,
      defaultValue: null
    }>
  },
  enums: Array<{ name: string, values: string[] }>,
  typeMapping: Record<string, string[]>
}

export interface Options {
  connection: string;
  suffix?: string;
  schema?: string;
  output?: string;
  exclude?: string[];
  header?: string;
  type?: boolean;
  semicolons?: boolean;
  optionals?: boolean;
  pascalEnums?: boolean;
  bigint?: boolean;
  dateAsString?: boolean;
  ssl?: boolean;
  onSchema?: (schema: Schema) => void;
  insertTypes?: boolean;
  tableNames?: boolean;
  comments?: boolean;
}

declare function generate(option: Options): Promise<string>;

export default generate
