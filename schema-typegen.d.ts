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
    schema?: string;
    output?: string;
    exclude?: string[];
    header?: string;
  }

  export default (options: Options) => Promise<string>;
}
