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
  insertTypes?: boolean;
}

declare function generate(option: Options): Promise<string>;

export default generate;

