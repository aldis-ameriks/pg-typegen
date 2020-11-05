/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports['test/pg-typegen.js TAP generates types as return value > must match snapshot 1'] = `
export enum DeliciousKebab {
  'big-mix' = 'big-mix',
  mix = 'mix',
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  orange = 'orange',
}

export enum SnakesOn {
  a_plane = 'a_plane',
}

export interface HistoryEntity {
  id: number;
};

export interface KebabTestEntity {
  id: number;
};

export interface MaterializedItemEntity {
  test: number | null;
  test_array: Array<number> | null;
  test_text: string | null;
  test_timestamp: Date | null;
};

export interface MaterializedOtherItemEntity {
  test: number | null;
  test_text: string | null;
};

export interface SnakeTestEntity {
  id: number;
};

export interface TypeEntity {
  avatar_darren: Array<number> | null;
  avatar_ernestina: string;
  avatar_mark: Array<any> | null;
  avatar_myah: Array<string>;
  avatar_rozella: Array<string>;
  camelCase: boolean | null;
  category_amari: string;
  category_april: Array<string>;
  category_buddy: Array<string> | null;
  category_clementine: number | null;
  category_marcelle: Date | null;
  category_roberta: boolean | null;
  category_trent: any | null;
  category_viola: string;
  comment_cali: string;
  comment_delilah: Array<string> | null;
  comment_easter: Date | null;
  comment_ella: string;
  comment_myles: string;
  comment_rocio: string | null;
  createdat_hulda: any;
  createdat_pansy: Array<number> | null;
  email_andres: Date;
  email_cleveland: string | null;
  email_keaton: Array<number> | null;
  email_lucio: string | null;
  email_paris: string;
  email_paula: string | null;
  email_ressie: string;
  fruit_a: Fruits | null;
  fruit_b: Fruits;
  group_abigayle: Array<string>;
  group_gabe: Array<Date> | null;
  group_jay: Array<string>;
  group_jedediah: Array<Date>;
  group_shanny: Date;
  group_toby: string;
  group_ulices: Array<string> | null;
  id_gay: string;
  id_hailee: any;
  id_helen: Array<number> | null;
  id_ike: Array<number>;
  id_joan: Array<string> | null;
  id_karelle: string | null;
  id_lavern: Date;
  id_margarita: string | null;
  id_maximilian: Array<string>;
  id_william: Array<string>;
  id_wilmer: Array<string> | null;
  'kebab-a': DeliciousKebab | null;
  'kebab-b': DeliciousKebab;
  name_amara: string | null;
  name_brionna: number;
  name_enoch: number;
  name_jermain: Array<string> | null;
  name_marielle: string | null;
  name_myrtle: Array<string> | null;
  name_santos: Array<string>;
  name_skye: string | null;
  name_stephanie: boolean;
  password_alessia: Array<string> | null;
  password_camylle: Array<string>;
  password_elenora: number | null;
  password_felton: Array<Date> | null;
  password_korey: number;
  password_murphy: Array<any> | null;
  password_vladimir: number | null;
  phone_angelo: string;
  phone_colten: number;
  phone_erling: Array<string> | null;
  phone_johanna: Array<Date> | null;
  phone_kendall: Array<number>;
  phone_keyshawn: string | null;
  phone_maryam: string | null;
  phone_osvaldo: Array<Date>;
  phone_rupert: any | null;
  snakes_on_a: SnakesOn | null;
  snakes_on_b: SnakesOn;
  status_amalia: number;
  status_angelica: Array<number> | null;
  status_cade: Array<number>;
  status_lori: string | null;
  status_ricky: number;
  status_sid: Array<boolean> | null;
  title_aidan: Date | null;
  title_alexzander: string;
  title_haylee: Array<string> | null;
  title_ilene: Array<any>;
  title_vicenta: string | null;
  title_vivienne: Array<number>;
  token_adella: Array<Date>;
  token_hermann: Array<string>;
  token_kenyon: Array<string>;
  token_marianna: Array<string> | null;
  token_rubye: string;
  token_ryley: number | null;
  token_zora: Array<number>;
  updatedat_aaliyah: number | null;
  updatedat_abe: Array<number> | null;
  updatedat_brett: Array<string> | null;
  updatedat_cedrick: Array<boolean>;
  updatedat_derick: Array<any>;
  updatedat_eli: Array<string>;
  updatedat_ewell: Array<string>;
  updatedat_laura: Array<string> | null;
  updatedat_melody: Array<number>;
  updatedat_rossie: number | null;
};

export interface UserEntity {
  id: number;
  name: string | null;
  name2: string;
  name3: string;
  other_id: number;
  other_primary_id: number;
};

`

exports['test/pg-typegen.js TAP generates types to file > must match snapshot 1'] = `
export enum DeliciousKebab {
  'big-mix' = 'big-mix',
  mix = 'mix',
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  orange = 'orange',
}

export enum SnakesOn {
  a_plane = 'a_plane',
}

export interface HistoryEntity {
  id: number;
};

export interface KebabTestEntity {
  id: number;
};

export interface MaterializedItemEntity {
  test: number | null;
  test_array: Array<number> | null;
  test_text: string | null;
  test_timestamp: Date | null;
};

export interface MaterializedOtherItemEntity {
  test: number | null;
  test_text: string | null;
};

export interface SnakeTestEntity {
  id: number;
};

export interface TypeEntity {
  avatar_darren: Array<number> | null;
  avatar_ernestina: string;
  avatar_mark: Array<any> | null;
  avatar_myah: Array<string>;
  avatar_rozella: Array<string>;
  camelCase: boolean | null;
  category_amari: string;
  category_april: Array<string>;
  category_buddy: Array<string> | null;
  category_clementine: number | null;
  category_marcelle: Date | null;
  category_roberta: boolean | null;
  category_trent: any | null;
  category_viola: string;
  comment_cali: string;
  comment_delilah: Array<string> | null;
  comment_easter: Date | null;
  comment_ella: string;
  comment_myles: string;
  comment_rocio: string | null;
  createdat_hulda: any;
  createdat_pansy: Array<number> | null;
  email_andres: Date;
  email_cleveland: string | null;
  email_keaton: Array<number> | null;
  email_lucio: string | null;
  email_paris: string;
  email_paula: string | null;
  email_ressie: string;
  fruit_a: Fruits | null;
  fruit_b: Fruits;
  group_abigayle: Array<string>;
  group_gabe: Array<Date> | null;
  group_jay: Array<string>;
  group_jedediah: Array<Date>;
  group_shanny: Date;
  group_toby: string;
  group_ulices: Array<string> | null;
  id_gay: string;
  id_hailee: any;
  id_helen: Array<number> | null;
  id_ike: Array<number>;
  id_joan: Array<string> | null;
  id_karelle: string | null;
  id_lavern: Date;
  id_margarita: string | null;
  id_maximilian: Array<string>;
  id_william: Array<string>;
  id_wilmer: Array<string> | null;
  'kebab-a': DeliciousKebab | null;
  'kebab-b': DeliciousKebab;
  name_amara: string | null;
  name_brionna: number;
  name_enoch: number;
  name_jermain: Array<string> | null;
  name_marielle: string | null;
  name_myrtle: Array<string> | null;
  name_santos: Array<string>;
  name_skye: string | null;
  name_stephanie: boolean;
  password_alessia: Array<string> | null;
  password_camylle: Array<string>;
  password_elenora: number | null;
  password_felton: Array<Date> | null;
  password_korey: number;
  password_murphy: Array<any> | null;
  password_vladimir: number | null;
  phone_angelo: string;
  phone_colten: number;
  phone_erling: Array<string> | null;
  phone_johanna: Array<Date> | null;
  phone_kendall: Array<number>;
  phone_keyshawn: string | null;
  phone_maryam: string | null;
  phone_osvaldo: Array<Date>;
  phone_rupert: any | null;
  snakes_on_a: SnakesOn | null;
  snakes_on_b: SnakesOn;
  status_amalia: number;
  status_angelica: Array<number> | null;
  status_cade: Array<number>;
  status_lori: string | null;
  status_ricky: number;
  status_sid: Array<boolean> | null;
  title_aidan: Date | null;
  title_alexzander: string;
  title_haylee: Array<string> | null;
  title_ilene: Array<any>;
  title_vicenta: string | null;
  title_vivienne: Array<number>;
  token_adella: Array<Date>;
  token_hermann: Array<string>;
  token_kenyon: Array<string>;
  token_marianna: Array<string> | null;
  token_rubye: string;
  token_ryley: number | null;
  token_zora: Array<number>;
  updatedat_aaliyah: number | null;
  updatedat_abe: Array<number> | null;
  updatedat_brett: Array<string> | null;
  updatedat_cedrick: Array<boolean>;
  updatedat_derick: Array<any>;
  updatedat_eli: Array<string>;
  updatedat_ewell: Array<string>;
  updatedat_laura: Array<string> | null;
  updatedat_melody: Array<number>;
  updatedat_rossie: number | null;
};

export interface UserEntity {
  id: number;
  name: string | null;
  name2: string;
  name3: string;
  other_id: number;
  other_primary_id: number;
};

`

exports['test/pg-typegen.js TAP generates types to file > must match snapshot 2'] = `
✔ Generated types from 7 tables and 3 enums
`

exports['test/pg-typegen.js TAP returns help when missing connection > must match snapshot 1'] = `
Usage: pg-typegen [options] <connection>

Options:
  -V, --version              output the version number
  -f, --suffix <suffix>      suffix to append to generated table type, e.g.
                             item -> ItemEntity (default: "Entity")
  -s, --schema <schema>      schema (default: "public")
  -h, --header <header>      header content (default: "")
  -o, --output <output>      file output path (default: "stdout")
  -e, --exclude <exclude>    excluded tables and enums as comma separated
                             string e.g. knex_migrations,knex_migrations_lock
                             (default: [])
  --type                     use type definitions instead of interfaces in
                             generated output (default: false)
  --noSemi, --no-semicolons  omit semicolons in generated types
  --ssl                      use ssl (default: false)
  --optionals                use optionals "?" instead of null (default: false)
  --pascal-enums             transform enum keys to pascal case (default:
                             false)
  --bigint                   use bigint for int8 types instead of strings
                             (default: false)
  --date-as-string           use string for date types instead of javascript
                             Date object (default: false)
  --insert-types             generate separate insert types with optional
                             columns having default values (default: false)
  --help                     display help for command

`

exports['test/pg-typegen.js TAP returns help when missing connection > must match snapshot 2'] = `
Usage: pg-typegen [options] <connection>

Options:
  -V, --version              output the version number
  -f, --suffix <suffix>      suffix to append to generated table type, e.g.
                             item -> ItemEntity (default: "Entity")
  -s, --schema <schema>      schema (default: "public")
  -h, --header <header>      header content (default: "")
  -o, --output <output>      file output path (default: "stdout")
  -e, --exclude <exclude>    excluded tables and enums as comma separated
                             string e.g. knex_migrations,knex_migrations_lock
                             (default: [])
  --type                     use type definitions instead of interfaces in
                             generated output (default: false)
  --noSemi, --no-semicolons  omit semicolons in generated types
  --ssl                      use ssl (default: false)
  --optionals                use optionals "?" instead of null (default: false)
  --pascal-enums             transform enum keys to pascal case (default:
                             false)
  --bigint                   use bigint for int8 types instead of strings
                             (default: false)
  --date-as-string           use string for date types instead of javascript
                             Date object (default: false)
  --insert-types             generate separate insert types with optional
                             columns having default values (default: false)
  --help                     display help for command

`
