declare module 'schema-typegen' {
  interface Options {
    connection: string;
    suffix?: string;
    noSemi?: boolean;
    semicolons?: boolean;
    type?: boolean;
    optionals?: boolean;
    pascalEnums?: boolean;
    bigint?: boolean;
    dateAsString?: boolean;
    schema?: string;
    output?: string;
    exclude?: string[];
    header?: string;
    ssl?: boolean;
    types?: boolean;
  }

  function generate(option: Options): Promise<string>;

  export default generate;
}
