/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports['test/cli.js > TAP > generates table names > must match snapshot 1'] = `
export type Tables = 'address' | 'histories' | 'kebab-test' | 'snake_test' | 'types' | 'users'

export enum DeliciousKebab {
  'big-mix' = 'big-mix',
  mix = 'mix',
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  orange = 'orange',
}

export enum NumericNames {
  '1name' = '1name',
  '2Name' = '2Name',
  '3-name' = '3-name',
  '4_name' = '4_name',
}

export enum SnakesOn {
  a_plane = 'a_plane',
}

export interface AddressEntity {
  id: number
}

export interface HistoryEntity {
  id: number
}

export interface KebabTestEntity {
  id: number
}

export interface MaterializedItemEntity {
  test: number | null
  test_array: Array<number> | null
  test_text: string | null
  test_timestamp: Date | null
}

export interface MaterializedOtherItemEntity {
  test: number | null
  test_text: string | null
}

export interface SnakeTestEntity {
  id: number
}

export interface SomeViewEntity {
  test: number | null
  test_text: string | null
}

export interface TypeEntity {
  avatar_darren: Array<number> | null
  avatar_ernestina: string
  avatar_mark: Array<any> | null
  avatar_myah: Array<string>
  avatar_rozella: Array<string>
  camelCase: boolean | null
  category_amari: string
  category_april: Array<string>
  category_buddy: Array<string> | null
  category_clementine: number | null
  category_marcelle: Date | null
  category_roberta: boolean | null
  category_trent: any | null
  category_viola: string
  comment_cali: string
  comment_delilah: Array<string> | null
  comment_easter: Date | null
  comment_ella: string
  comment_myles: string
  comment_rocio: string | null
  createdat_hulda: any
  createdat_pansy: Array<number> | null
  email_andres: Date
  email_cleveland: string | null
  email_keaton: Array<number> | null
  email_lucio: string | null
  email_paris: string
  email_paula: string | null
  email_ressie: string
  fruit_a: Fruits | null
  fruit_b: Fruits
  group_abigayle: Array<string>
  group_gabe: Array<Date> | null
  group_jay: Array<string>
  group_jedediah: Array<Date>
  group_shanny: Date
  group_toby: string
  group_ulices: Array<string> | null
  id_gay: string
  id_hailee: any
  id_helen: Array<number> | null
  id_ike: Array<string>
  id_joan: Array<string> | null
  id_karelle: string | null
  id_lavern: Date
  id_margarita: string | null
  id_maximilian: Array<string>
  id_william: Array<string>
  id_wilmer: Array<string> | null
  'kebab-a': DeliciousKebab | null
  'kebab-b': DeliciousKebab
  name_amara: string | null
  name_brionna: number
  name_enoch: string
  name_jermain: Array<string> | null
  name_marielle: string | null
  name_myrtle: Array<string> | null
  name_santos: Array<string>
  name_skye: string | null
  name_stephanie: boolean
  password_alessia: Array<string> | null
  password_camylle: Array<string>
  password_elenora: number | null
  password_felton: Array<Date> | null
  password_korey: number
  password_murphy: Array<any> | null
  password_vladimir: number | null
  phone_angelo: string
  phone_colten: number
  phone_erling: Array<string> | null
  phone_johanna: Array<Date> | null
  phone_kendall: Array<number>
  phone_keyshawn: string | null
  phone_maryam: string | null
  phone_osvaldo: Array<Date>
  phone_rupert: any | null
  snakes_on_a: SnakesOn | null
  snakes_on_b: SnakesOn
  status_amalia: number
  status_angelica: Array<number> | null
  status_cade: Array<number>
  status_lori: string | null
  status_ricky: number
  status_sid: Array<boolean> | null
  title_aidan: Date | null
  title_alexzander: string
  title_haylee: Array<string> | null
  title_ilene: Array<any>
  title_vicenta: string | null
  title_vivienne: Array<number>
  token_adella: Array<Date>
  token_hermann: Array<string>
  token_kenyon: Array<string>
  token_marianna: Array<string> | null
  token_rubye: string
  token_ryley: string | null
  token_zora: Array<number>
  updatedat_aaliyah: number | null
  updatedat_abe: Array<string> | null
  updatedat_brett: Array<string> | null
  updatedat_cedrick: Array<boolean>
  updatedat_derick: Array<any>
  updatedat_eli: Array<string>
  updatedat_ewell: Array<string>
  updatedat_laura: Array<string> | null
  updatedat_melody: Array<number>
  updatedat_rossie: number | null
}

export interface UserEntity {
  id: number
  name: string | null
  name2: string
  name3: string
  other_id: number
  other_primary_id: number
}


`

exports['test/cli.js > TAP > generates types stdout > must match snapshot 1'] = `
export enum DeliciousKebab {
  'big-mix' = 'big-mix',
  mix = 'mix',
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  orange = 'orange',
}

export enum NumericNames {
  '1name' = '1name',
  '2Name' = '2Name',
  '3-name' = '3-name',
  '4_name' = '4_name',
}

export enum SnakesOn {
  a_plane = 'a_plane',
}

export interface AddressEntity {
  id: number
}

export interface HistoryEntity {
  id: number
}

export interface KebabTestEntity {
  id: number
}

export interface MaterializedItemEntity {
  test: number | null
  test_array: Array<number> | null
  test_text: string | null
  test_timestamp: Date | null
}

export interface MaterializedOtherItemEntity {
  test: number | null
  test_text: string | null
}

export interface SnakeTestEntity {
  id: number
}

export interface SomeViewEntity {
  test: number | null
  test_text: string | null
}

export interface TypeEntity {
  avatar_darren: Array<number> | null
  avatar_ernestina: string
  avatar_mark: Array<any> | null
  avatar_myah: Array<string>
  avatar_rozella: Array<string>
  camelCase: boolean | null
  category_amari: string
  category_april: Array<string>
  category_buddy: Array<string> | null
  category_clementine: number | null
  category_marcelle: Date | null
  category_roberta: boolean | null
  category_trent: any | null
  category_viola: string
  comment_cali: string
  comment_delilah: Array<string> | null
  comment_easter: Date | null
  comment_ella: string
  comment_myles: string
  comment_rocio: string | null
  createdat_hulda: any
  createdat_pansy: Array<number> | null
  email_andres: Date
  email_cleveland: string | null
  email_keaton: Array<number> | null
  email_lucio: string | null
  email_paris: string
  email_paula: string | null
  email_ressie: string
  fruit_a: Fruits | null
  fruit_b: Fruits
  group_abigayle: Array<string>
  group_gabe: Array<Date> | null
  group_jay: Array<string>
  group_jedediah: Array<Date>
  group_shanny: Date
  group_toby: string
  group_ulices: Array<string> | null
  id_gay: string
  id_hailee: any
  id_helen: Array<number> | null
  id_ike: Array<string>
  id_joan: Array<string> | null
  id_karelle: string | null
  id_lavern: Date
  id_margarita: string | null
  id_maximilian: Array<string>
  id_william: Array<string>
  id_wilmer: Array<string> | null
  'kebab-a': DeliciousKebab | null
  'kebab-b': DeliciousKebab
  name_amara: string | null
  name_brionna: number
  name_enoch: string
  name_jermain: Array<string> | null
  name_marielle: string | null
  name_myrtle: Array<string> | null
  name_santos: Array<string>
  name_skye: string | null
  name_stephanie: boolean
  password_alessia: Array<string> | null
  password_camylle: Array<string>
  password_elenora: number | null
  password_felton: Array<Date> | null
  password_korey: number
  password_murphy: Array<any> | null
  password_vladimir: number | null
  phone_angelo: string
  phone_colten: number
  phone_erling: Array<string> | null
  phone_johanna: Array<Date> | null
  phone_kendall: Array<number>
  phone_keyshawn: string | null
  phone_maryam: string | null
  phone_osvaldo: Array<Date>
  phone_rupert: any | null
  snakes_on_a: SnakesOn | null
  snakes_on_b: SnakesOn
  status_amalia: number
  status_angelica: Array<number> | null
  status_cade: Array<number>
  status_lori: string | null
  status_ricky: number
  status_sid: Array<boolean> | null
  title_aidan: Date | null
  title_alexzander: string
  title_haylee: Array<string> | null
  title_ilene: Array<any>
  title_vicenta: string | null
  title_vivienne: Array<number>
  token_adella: Array<Date>
  token_hermann: Array<string>
  token_kenyon: Array<string>
  token_marianna: Array<string> | null
  token_rubye: string
  token_ryley: string | null
  token_zora: Array<number>
  updatedat_aaliyah: number | null
  updatedat_abe: Array<string> | null
  updatedat_brett: Array<string> | null
  updatedat_cedrick: Array<boolean>
  updatedat_derick: Array<any>
  updatedat_eli: Array<string>
  updatedat_ewell: Array<string>
  updatedat_laura: Array<string> | null
  updatedat_melody: Array<number>
  updatedat_rossie: number | null
}

export interface UserEntity {
  id: number
  name: string | null
  name2: string
  name3: string
  other_id: number
  other_primary_id: number
}


`

exports['test/cli.js > TAP > generates types to file > must match snapshot 1'] = `
export enum DeliciousKebab {
  'big-mix' = 'big-mix',
  mix = 'mix',
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  orange = 'orange',
}

export enum NumericNames {
  '1name' = '1name',
  '2Name' = '2Name',
  '3-name' = '3-name',
  '4_name' = '4_name',
}

export enum SnakesOn {
  a_plane = 'a_plane',
}

export interface AddressEntity {
  id: number
}

export interface HistoryEntity {
  id: number
}

export interface KebabTestEntity {
  id: number
}

export interface MaterializedItemEntity {
  test: number | null
  test_array: Array<number> | null
  test_text: string | null
  test_timestamp: Date | null
}

export interface MaterializedOtherItemEntity {
  test: number | null
  test_text: string | null
}

export interface SnakeTestEntity {
  id: number
}

export interface SomeViewEntity {
  test: number | null
  test_text: string | null
}

export interface TypeEntity {
  avatar_darren: Array<number> | null
  avatar_ernestina: string
  avatar_mark: Array<any> | null
  avatar_myah: Array<string>
  avatar_rozella: Array<string>
  camelCase: boolean | null
  category_amari: string
  category_april: Array<string>
  category_buddy: Array<string> | null
  category_clementine: number | null
  category_marcelle: Date | null
  category_roberta: boolean | null
  category_trent: any | null
  category_viola: string
  comment_cali: string
  comment_delilah: Array<string> | null
  comment_easter: Date | null
  comment_ella: string
  comment_myles: string
  comment_rocio: string | null
  createdat_hulda: any
  createdat_pansy: Array<number> | null
  email_andres: Date
  email_cleveland: string | null
  email_keaton: Array<number> | null
  email_lucio: string | null
  email_paris: string
  email_paula: string | null
  email_ressie: string
  fruit_a: Fruits | null
  fruit_b: Fruits
  group_abigayle: Array<string>
  group_gabe: Array<Date> | null
  group_jay: Array<string>
  group_jedediah: Array<Date>
  group_shanny: Date
  group_toby: string
  group_ulices: Array<string> | null
  id_gay: string
  id_hailee: any
  id_helen: Array<number> | null
  id_ike: Array<string>
  id_joan: Array<string> | null
  id_karelle: string | null
  id_lavern: Date
  id_margarita: string | null
  id_maximilian: Array<string>
  id_william: Array<string>
  id_wilmer: Array<string> | null
  'kebab-a': DeliciousKebab | null
  'kebab-b': DeliciousKebab
  name_amara: string | null
  name_brionna: number
  name_enoch: string
  name_jermain: Array<string> | null
  name_marielle: string | null
  name_myrtle: Array<string> | null
  name_santos: Array<string>
  name_skye: string | null
  name_stephanie: boolean
  password_alessia: Array<string> | null
  password_camylle: Array<string>
  password_elenora: number | null
  password_felton: Array<Date> | null
  password_korey: number
  password_murphy: Array<any> | null
  password_vladimir: number | null
  phone_angelo: string
  phone_colten: number
  phone_erling: Array<string> | null
  phone_johanna: Array<Date> | null
  phone_kendall: Array<number>
  phone_keyshawn: string | null
  phone_maryam: string | null
  phone_osvaldo: Array<Date>
  phone_rupert: any | null
  snakes_on_a: SnakesOn | null
  snakes_on_b: SnakesOn
  status_amalia: number
  status_angelica: Array<number> | null
  status_cade: Array<number>
  status_lori: string | null
  status_ricky: number
  status_sid: Array<boolean> | null
  title_aidan: Date | null
  title_alexzander: string
  title_haylee: Array<string> | null
  title_ilene: Array<any>
  title_vicenta: string | null
  title_vivienne: Array<number>
  token_adella: Array<Date>
  token_hermann: Array<string>
  token_kenyon: Array<string>
  token_marianna: Array<string> | null
  token_rubye: string
  token_ryley: string | null
  token_zora: Array<number>
  updatedat_aaliyah: number | null
  updatedat_abe: Array<string> | null
  updatedat_brett: Array<string> | null
  updatedat_cedrick: Array<boolean>
  updatedat_derick: Array<any>
  updatedat_eli: Array<string>
  updatedat_ewell: Array<string>
  updatedat_laura: Array<string> | null
  updatedat_melody: Array<number>
  updatedat_rossie: number | null
}

export interface UserEntity {
  id: number
  name: string | null
  name2: string
  name3: string
  other_id: number
  other_primary_id: number
}

`

exports['test/cli.js > TAP > generates types with bigint option > must match snapshot 1'] = `
export enum DeliciousKebab {
  'big-mix' = 'big-mix',
  mix = 'mix',
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  orange = 'orange',
}

export enum NumericNames {
  '1name' = '1name',
  '2Name' = '2Name',
  '3-name' = '3-name',
  '4_name' = '4_name',
}

export enum SnakesOn {
  a_plane = 'a_plane',
}

export interface AddressEntity {
  id: number
}

export interface HistoryEntity {
  id: number
}

export interface KebabTestEntity {
  id: number
}

export interface MaterializedItemEntity {
  test: number | null
  test_array: Array<number> | null
  test_text: string | null
  test_timestamp: Date | null
}

export interface MaterializedOtherItemEntity {
  test: number | null
  test_text: string | null
}

export interface SnakeTestEntity {
  id: number
}

export interface SomeViewEntity {
  test: number | null
  test_text: string | null
}

export interface TypeEntity {
  avatar_darren: Array<number> | null
  avatar_ernestina: string
  avatar_mark: Array<any> | null
  avatar_myah: Array<string>
  avatar_rozella: Array<string>
  camelCase: boolean | null
  category_amari: string
  category_april: Array<bigint>
  category_buddy: Array<string> | null
  category_clementine: number | null
  category_marcelle: Date | null
  category_roberta: boolean | null
  category_trent: any | null
  category_viola: string
  comment_cali: string
  comment_delilah: Array<string> | null
  comment_easter: Date | null
  comment_ella: string
  comment_myles: string
  comment_rocio: string | null
  createdat_hulda: any
  createdat_pansy: Array<number> | null
  email_andres: Date
  email_cleveland: string | null
  email_keaton: Array<number> | null
  email_lucio: string | null
  email_paris: string
  email_paula: string | null
  email_ressie: string
  fruit_a: Fruits | null
  fruit_b: Fruits
  group_abigayle: Array<string>
  group_gabe: Array<Date> | null
  group_jay: Array<string>
  group_jedediah: Array<Date>
  group_shanny: Date
  group_toby: string
  group_ulices: Array<bigint> | null
  id_gay: string
  id_hailee: any
  id_helen: Array<number> | null
  id_ike: Array<string>
  id_joan: Array<string> | null
  id_karelle: string | null
  id_lavern: Date
  id_margarita: bigint | null
  id_maximilian: Array<string>
  id_william: Array<string>
  id_wilmer: Array<string> | null
  'kebab-a': DeliciousKebab | null
  'kebab-b': DeliciousKebab
  name_amara: string | null
  name_brionna: number
  name_enoch: string
  name_jermain: Array<string> | null
  name_marielle: string | null
  name_myrtle: Array<string> | null
  name_santos: Array<string>
  name_skye: string | null
  name_stephanie: boolean
  password_alessia: Array<string> | null
  password_camylle: Array<string>
  password_elenora: number | null
  password_felton: Array<Date> | null
  password_korey: number
  password_murphy: Array<any> | null
  password_vladimir: number | null
  phone_angelo: bigint
  phone_colten: number
  phone_erling: Array<string> | null
  phone_johanna: Array<Date> | null
  phone_kendall: Array<number>
  phone_keyshawn: string | null
  phone_maryam: string | null
  phone_osvaldo: Array<Date>
  phone_rupert: any | null
  snakes_on_a: SnakesOn | null
  snakes_on_b: SnakesOn
  status_amalia: number
  status_angelica: Array<number> | null
  status_cade: Array<number>
  status_lori: string | null
  status_ricky: number
  status_sid: Array<boolean> | null
  title_aidan: Date | null
  title_alexzander: string
  title_haylee: Array<string> | null
  title_ilene: Array<any>
  title_vicenta: string | null
  title_vivienne: Array<number>
  token_adella: Array<Date>
  token_hermann: Array<string>
  token_kenyon: Array<string>
  token_marianna: Array<string> | null
  token_rubye: string
  token_ryley: string | null
  token_zora: Array<number>
  updatedat_aaliyah: number | null
  updatedat_abe: Array<string> | null
  updatedat_brett: Array<string> | null
  updatedat_cedrick: Array<boolean>
  updatedat_derick: Array<any>
  updatedat_eli: Array<string>
  updatedat_ewell: Array<string>
  updatedat_laura: Array<string> | null
  updatedat_melody: Array<number>
  updatedat_rossie: number | null
}

export interface UserEntity {
  id: number
  name: string | null
  name2: string
  name3: string
  other_id: number
  other_primary_id: number
}


`

exports['test/cli.js > TAP > generates types with exclusion > must match snapshot 1'] = `
export enum DeliciousKebab {
  'big-mix' = 'big-mix',
  mix = 'mix',
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  orange = 'orange',
}

export enum NumericNames {
  '1name' = '1name',
  '2Name' = '2Name',
  '3-name' = '3-name',
  '4_name' = '4_name',
}

export enum SnakesOn {
  a_plane = 'a_plane',
}

export interface AddressEntity {
  id: number
}

export interface HistoryEntity {
  id: number
}

export interface KebabTestEntity {
  id: number
}

export interface MaterializedItemEntity {
  test: number | null
  test_array: Array<number> | null
  test_text: string | null
  test_timestamp: Date | null
}

export interface MaterializedOtherItemEntity {
  test: number | null
  test_text: string | null
}

export interface SomeViewEntity {
  test: number | null
  test_text: string | null
}

export interface UserEntity {
  id: number
  name: string | null
  name2: string
  name3: string
  other_id: number
  other_primary_id: number
}


`

exports['test/cli.js > TAP > generates types with header > must match snapshot 1'] = `
/* eslint-disable */

export enum DeliciousKebab {
  'big-mix' = 'big-mix',
  mix = 'mix',
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  orange = 'orange',
}

export enum NumericNames {
  '1name' = '1name',
  '2Name' = '2Name',
  '3-name' = '3-name',
  '4_name' = '4_name',
}

export enum SnakesOn {
  a_plane = 'a_plane',
}

export interface AddressEntity {
  id: number
}

export interface HistoryEntity {
  id: number
}

export interface KebabTestEntity {
  id: number
}

export interface MaterializedItemEntity {
  test: number | null
  test_array: Array<number> | null
  test_text: string | null
  test_timestamp: Date | null
}

export interface MaterializedOtherItemEntity {
  test: number | null
  test_text: string | null
}

export interface SnakeTestEntity {
  id: number
}

export interface SomeViewEntity {
  test: number | null
  test_text: string | null
}

export interface TypeEntity {
  avatar_darren: Array<number> | null
  avatar_ernestina: string
  avatar_mark: Array<any> | null
  avatar_myah: Array<string>
  avatar_rozella: Array<string>
  camelCase: boolean | null
  category_amari: string
  category_april: Array<string>
  category_buddy: Array<string> | null
  category_clementine: number | null
  category_marcelle: Date | null
  category_roberta: boolean | null
  category_trent: any | null
  category_viola: string
  comment_cali: string
  comment_delilah: Array<string> | null
  comment_easter: Date | null
  comment_ella: string
  comment_myles: string
  comment_rocio: string | null
  createdat_hulda: any
  createdat_pansy: Array<number> | null
  email_andres: Date
  email_cleveland: string | null
  email_keaton: Array<number> | null
  email_lucio: string | null
  email_paris: string
  email_paula: string | null
  email_ressie: string
  fruit_a: Fruits | null
  fruit_b: Fruits
  group_abigayle: Array<string>
  group_gabe: Array<Date> | null
  group_jay: Array<string>
  group_jedediah: Array<Date>
  group_shanny: Date
  group_toby: string
  group_ulices: Array<string> | null
  id_gay: string
  id_hailee: any
  id_helen: Array<number> | null
  id_ike: Array<string>
  id_joan: Array<string> | null
  id_karelle: string | null
  id_lavern: Date
  id_margarita: string | null
  id_maximilian: Array<string>
  id_william: Array<string>
  id_wilmer: Array<string> | null
  'kebab-a': DeliciousKebab | null
  'kebab-b': DeliciousKebab
  name_amara: string | null
  name_brionna: number
  name_enoch: string
  name_jermain: Array<string> | null
  name_marielle: string | null
  name_myrtle: Array<string> | null
  name_santos: Array<string>
  name_skye: string | null
  name_stephanie: boolean
  password_alessia: Array<string> | null
  password_camylle: Array<string>
  password_elenora: number | null
  password_felton: Array<Date> | null
  password_korey: number
  password_murphy: Array<any> | null
  password_vladimir: number | null
  phone_angelo: string
  phone_colten: number
  phone_erling: Array<string> | null
  phone_johanna: Array<Date> | null
  phone_kendall: Array<number>
  phone_keyshawn: string | null
  phone_maryam: string | null
  phone_osvaldo: Array<Date>
  phone_rupert: any | null
  snakes_on_a: SnakesOn | null
  snakes_on_b: SnakesOn
  status_amalia: number
  status_angelica: Array<number> | null
  status_cade: Array<number>
  status_lori: string | null
  status_ricky: number
  status_sid: Array<boolean> | null
  title_aidan: Date | null
  title_alexzander: string
  title_haylee: Array<string> | null
  title_ilene: Array<any>
  title_vicenta: string | null
  title_vivienne: Array<number>
  token_adella: Array<Date>
  token_hermann: Array<string>
  token_kenyon: Array<string>
  token_marianna: Array<string> | null
  token_rubye: string
  token_ryley: string | null
  token_zora: Array<number>
  updatedat_aaliyah: number | null
  updatedat_abe: Array<string> | null
  updatedat_brett: Array<string> | null
  updatedat_cedrick: Array<boolean>
  updatedat_derick: Array<any>
  updatedat_eli: Array<string>
  updatedat_ewell: Array<string>
  updatedat_laura: Array<string> | null
  updatedat_melody: Array<number>
  updatedat_rossie: number | null
}

export interface UserEntity {
  id: number
  name: string | null
  name2: string
  name3: string
  other_id: number
  other_primary_id: number
}


`

exports['test/cli.js > TAP > generates types with insert types > must match snapshot 1'] = `
export enum DeliciousKebab {
  'big-mix' = 'big-mix',
  mix = 'mix',
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  orange = 'orange',
}

export enum NumericNames {
  '1name' = '1name',
  '2Name' = '2Name',
  '3-name' = '3-name',
  '4_name' = '4_name',
}

export enum SnakesOn {
  a_plane = 'a_plane',
}

export interface AddressEntity {
  id: number
}

export interface AddressInsertEntity {
  id: number
}

export interface HistoryEntity {
  id: number
}

export interface HistoryInsertEntity {
  id: number
}

export interface KebabTestEntity {
  id: number
}

export interface KebabTestInsertEntity {
  id: number
}

export interface MaterializedItemEntity {
  test: number | null
  test_array: Array<number> | null
  test_text: string | null
  test_timestamp: Date | null
}

export interface MaterializedOtherItemEntity {
  test: number | null
  test_text: string | null
}

export interface SnakeTestEntity {
  id: number
}

export interface SnakeTestInsertEntity {
  id: number
}

export interface SomeViewEntity {
  test: number | null
  test_text: string | null
}

export interface TypeEntity {
  avatar_darren: Array<number> | null
  avatar_ernestina: string
  avatar_mark: Array<any> | null
  avatar_myah: Array<string>
  avatar_rozella: Array<string>
  camelCase: boolean | null
  category_amari: string
  category_april: Array<string>
  category_buddy: Array<string> | null
  category_clementine: number | null
  category_marcelle: Date | null
  category_roberta: boolean | null
  category_trent: any | null
  category_viola: string
  comment_cali: string
  comment_delilah: Array<string> | null
  comment_easter: Date | null
  comment_ella: string
  comment_myles: string
  comment_rocio: string | null
  createdat_hulda: any
  createdat_pansy: Array<number> | null
  email_andres: Date
  email_cleveland: string | null
  email_keaton: Array<number> | null
  email_lucio: string | null
  email_paris: string
  email_paula: string | null
  email_ressie: string
  fruit_a: Fruits | null
  fruit_b: Fruits
  group_abigayle: Array<string>
  group_gabe: Array<Date> | null
  group_jay: Array<string>
  group_jedediah: Array<Date>
  group_shanny: Date
  group_toby: string
  group_ulices: Array<string> | null
  id_gay: string
  id_hailee: any
  id_helen: Array<number> | null
  id_ike: Array<string>
  id_joan: Array<string> | null
  id_karelle: string | null
  id_lavern: Date
  id_margarita: string | null
  id_maximilian: Array<string>
  id_william: Array<string>
  id_wilmer: Array<string> | null
  'kebab-a': DeliciousKebab | null
  'kebab-b': DeliciousKebab
  name_amara: string | null
  name_brionna: number
  name_enoch: string
  name_jermain: Array<string> | null
  name_marielle: string | null
  name_myrtle: Array<string> | null
  name_santos: Array<string>
  name_skye: string | null
  name_stephanie: boolean
  password_alessia: Array<string> | null
  password_camylle: Array<string>
  password_elenora: number | null
  password_felton: Array<Date> | null
  password_korey: number
  password_murphy: Array<any> | null
  password_vladimir: number | null
  phone_angelo: string
  phone_colten: number
  phone_erling: Array<string> | null
  phone_johanna: Array<Date> | null
  phone_kendall: Array<number>
  phone_keyshawn: string | null
  phone_maryam: string | null
  phone_osvaldo: Array<Date>
  phone_rupert: any | null
  snakes_on_a: SnakesOn | null
  snakes_on_b: SnakesOn
  status_amalia: number
  status_angelica: Array<number> | null
  status_cade: Array<number>
  status_lori: string | null
  status_ricky: number
  status_sid: Array<boolean> | null
  title_aidan: Date | null
  title_alexzander: string
  title_haylee: Array<string> | null
  title_ilene: Array<any>
  title_vicenta: string | null
  title_vivienne: Array<number>
  token_adella: Array<Date>
  token_hermann: Array<string>
  token_kenyon: Array<string>
  token_marianna: Array<string> | null
  token_rubye: string
  token_ryley: string | null
  token_zora: Array<number>
  updatedat_aaliyah: number | null
  updatedat_abe: Array<string> | null
  updatedat_brett: Array<string> | null
  updatedat_cedrick: Array<boolean>
  updatedat_derick: Array<any>
  updatedat_eli: Array<string>
  updatedat_ewell: Array<string>
  updatedat_laura: Array<string> | null
  updatedat_melody: Array<number>
  updatedat_rossie: number | null
}

export interface TypeInsertEntity {
  avatar_darren?: Array<number> | null
  avatar_ernestina: string
  avatar_mark?: Array<any> | null
  avatar_myah: Array<string>
  avatar_rozella: Array<string>
  camelCase?: boolean | null
  category_amari: string
  category_april: Array<string>
  category_buddy?: Array<string> | null
  category_clementine?: number | null
  category_marcelle?: Date | null
  category_roberta?: boolean | null
  category_trent?: any | null
  category_viola: string
  comment_cali: string
  comment_delilah?: Array<string> | null
  comment_easter?: Date | null
  comment_ella: string
  comment_myles: string
  comment_rocio?: string | null
  createdat_hulda: any
  createdat_pansy?: Array<number> | null
  email_andres: Date
  email_cleveland?: string | null
  email_keaton?: Array<number> | null
  email_lucio?: string | null
  email_paris: string
  email_paula?: string | null
  email_ressie: string
  fruit_a?: Fruits | null
  fruit_b: Fruits
  group_abigayle: Array<string>
  group_gabe?: Array<Date> | null
  group_jay: Array<string>
  group_jedediah: Array<Date>
  group_shanny: Date
  group_toby: string
  group_ulices?: Array<string> | null
  id_gay: string
  id_hailee: any
  id_helen?: Array<number> | null
  id_ike: Array<string>
  id_joan?: Array<string> | null
  id_karelle?: string | null
  id_lavern: Date
  id_margarita?: string | null
  id_maximilian: Array<string>
  id_william: Array<string>
  id_wilmer?: Array<string> | null
  'kebab-a'?: DeliciousKebab | null
  'kebab-b': DeliciousKebab
  name_amara?: string | null
  name_brionna: number
  name_enoch: string
  name_jermain?: Array<string> | null
  name_marielle?: string | null
  name_myrtle?: Array<string> | null
  name_santos: Array<string>
  name_skye?: string | null
  name_stephanie: boolean
  password_alessia?: Array<string> | null
  password_camylle: Array<string>
  password_elenora?: number | null
  password_felton?: Array<Date> | null
  password_korey: number
  password_murphy?: Array<any> | null
  password_vladimir?: number | null
  phone_angelo: string
  phone_colten: number
  phone_erling?: Array<string> | null
  phone_johanna?: Array<Date> | null
  phone_kendall: Array<number>
  phone_keyshawn?: string | null
  phone_maryam?: string | null
  phone_osvaldo: Array<Date>
  phone_rupert?: any | null
  snakes_on_a?: SnakesOn | null
  snakes_on_b: SnakesOn
  status_amalia: number
  status_angelica?: Array<number> | null
  status_cade: Array<number>
  status_lori?: string | null
  status_ricky: number
  status_sid?: Array<boolean> | null
  title_aidan?: Date | null
  title_alexzander: string
  title_haylee?: Array<string> | null
  title_ilene: Array<any>
  title_vicenta?: string | null
  title_vivienne: Array<number>
  token_adella: Array<Date>
  token_hermann: Array<string>
  token_kenyon: Array<string>
  token_marianna?: Array<string> | null
  token_rubye: string
  token_ryley?: string | null
  token_zora: Array<number>
  updatedat_aaliyah?: number | null
  updatedat_abe?: Array<string> | null
  updatedat_brett?: Array<string> | null
  updatedat_cedrick: Array<boolean>
  updatedat_derick: Array<any>
  updatedat_eli: Array<string>
  updatedat_ewell: Array<string>
  updatedat_laura?: Array<string> | null
  updatedat_melody: Array<number>
  updatedat_rossie?: number | null
}

export interface UserEntity {
  id: number
  name: string | null
  name2: string
  name3: string
  other_id: number
  other_primary_id: number
}

export interface UserInsertEntity {
  id?: number
  name?: string | null
  name2?: string
  name3: string
  other_id?: number
  other_primary_id?: number
}


`

exports['test/cli.js > TAP > generates types with no-semicolons option > must match snapshot 1'] = `
export enum DeliciousKebab {
  'big-mix' = 'big-mix',
  mix = 'mix',
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  orange = 'orange',
}

export enum NumericNames {
  '1name' = '1name',
  '2Name' = '2Name',
  '3-name' = '3-name',
  '4_name' = '4_name',
}

export enum SnakesOn {
  a_plane = 'a_plane',
}

export interface AddressEntity {
  id: number
}

export interface HistoryEntity {
  id: number
}

export interface KebabTestEntity {
  id: number
}

export interface MaterializedItemEntity {
  test: number | null
  test_array: Array<number> | null
  test_text: string | null
  test_timestamp: Date | null
}

export interface MaterializedOtherItemEntity {
  test: number | null
  test_text: string | null
}

export interface SnakeTestEntity {
  id: number
}

export interface SomeViewEntity {
  test: number | null
  test_text: string | null
}

export interface TypeEntity {
  avatar_darren: Array<number> | null
  avatar_ernestina: string
  avatar_mark: Array<any> | null
  avatar_myah: Array<string>
  avatar_rozella: Array<string>
  camelCase: boolean | null
  category_amari: string
  category_april: Array<string>
  category_buddy: Array<string> | null
  category_clementine: number | null
  category_marcelle: Date | null
  category_roberta: boolean | null
  category_trent: any | null
  category_viola: string
  comment_cali: string
  comment_delilah: Array<string> | null
  comment_easter: Date | null
  comment_ella: string
  comment_myles: string
  comment_rocio: string | null
  createdat_hulda: any
  createdat_pansy: Array<number> | null
  email_andres: Date
  email_cleveland: string | null
  email_keaton: Array<number> | null
  email_lucio: string | null
  email_paris: string
  email_paula: string | null
  email_ressie: string
  fruit_a: Fruits | null
  fruit_b: Fruits
  group_abigayle: Array<string>
  group_gabe: Array<Date> | null
  group_jay: Array<string>
  group_jedediah: Array<Date>
  group_shanny: Date
  group_toby: string
  group_ulices: Array<string> | null
  id_gay: string
  id_hailee: any
  id_helen: Array<number> | null
  id_ike: Array<string>
  id_joan: Array<string> | null
  id_karelle: string | null
  id_lavern: Date
  id_margarita: string | null
  id_maximilian: Array<string>
  id_william: Array<string>
  id_wilmer: Array<string> | null
  'kebab-a': DeliciousKebab | null
  'kebab-b': DeliciousKebab
  name_amara: string | null
  name_brionna: number
  name_enoch: string
  name_jermain: Array<string> | null
  name_marielle: string | null
  name_myrtle: Array<string> | null
  name_santos: Array<string>
  name_skye: string | null
  name_stephanie: boolean
  password_alessia: Array<string> | null
  password_camylle: Array<string>
  password_elenora: number | null
  password_felton: Array<Date> | null
  password_korey: number
  password_murphy: Array<any> | null
  password_vladimir: number | null
  phone_angelo: string
  phone_colten: number
  phone_erling: Array<string> | null
  phone_johanna: Array<Date> | null
  phone_kendall: Array<number>
  phone_keyshawn: string | null
  phone_maryam: string | null
  phone_osvaldo: Array<Date>
  phone_rupert: any | null
  snakes_on_a: SnakesOn | null
  snakes_on_b: SnakesOn
  status_amalia: number
  status_angelica: Array<number> | null
  status_cade: Array<number>
  status_lori: string | null
  status_ricky: number
  status_sid: Array<boolean> | null
  title_aidan: Date | null
  title_alexzander: string
  title_haylee: Array<string> | null
  title_ilene: Array<any>
  title_vicenta: string | null
  title_vivienne: Array<number>
  token_adella: Array<Date>
  token_hermann: Array<string>
  token_kenyon: Array<string>
  token_marianna: Array<string> | null
  token_rubye: string
  token_ryley: string | null
  token_zora: Array<number>
  updatedat_aaliyah: number | null
  updatedat_abe: Array<string> | null
  updatedat_brett: Array<string> | null
  updatedat_cedrick: Array<boolean>
  updatedat_derick: Array<any>
  updatedat_eli: Array<string>
  updatedat_ewell: Array<string>
  updatedat_laura: Array<string> | null
  updatedat_melody: Array<number>
  updatedat_rossie: number | null
}

export interface UserEntity {
  id: number
  name: string | null
  name2: string
  name3: string
  other_id: number
  other_primary_id: number
}


`

exports['test/cli.js > TAP > generates types with noSemi option > must match snapshot 1'] = `
export enum DeliciousKebab {
  'big-mix' = 'big-mix',
  mix = 'mix',
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  orange = 'orange',
}

export enum NumericNames {
  '1name' = '1name',
  '2Name' = '2Name',
  '3-name' = '3-name',
  '4_name' = '4_name',
}

export enum SnakesOn {
  a_plane = 'a_plane',
}

export interface AddressEntity {
  id: number
}

export interface HistoryEntity {
  id: number
}

export interface KebabTestEntity {
  id: number
}

export interface MaterializedItemEntity {
  test: number | null
  test_array: Array<number> | null
  test_text: string | null
  test_timestamp: Date | null
}

export interface MaterializedOtherItemEntity {
  test: number | null
  test_text: string | null
}

export interface SnakeTestEntity {
  id: number
}

export interface SomeViewEntity {
  test: number | null
  test_text: string | null
}

export interface TypeEntity {
  avatar_darren: Array<number> | null
  avatar_ernestina: string
  avatar_mark: Array<any> | null
  avatar_myah: Array<string>
  avatar_rozella: Array<string>
  camelCase: boolean | null
  category_amari: string
  category_april: Array<string>
  category_buddy: Array<string> | null
  category_clementine: number | null
  category_marcelle: Date | null
  category_roberta: boolean | null
  category_trent: any | null
  category_viola: string
  comment_cali: string
  comment_delilah: Array<string> | null
  comment_easter: Date | null
  comment_ella: string
  comment_myles: string
  comment_rocio: string | null
  createdat_hulda: any
  createdat_pansy: Array<number> | null
  email_andres: Date
  email_cleveland: string | null
  email_keaton: Array<number> | null
  email_lucio: string | null
  email_paris: string
  email_paula: string | null
  email_ressie: string
  fruit_a: Fruits | null
  fruit_b: Fruits
  group_abigayle: Array<string>
  group_gabe: Array<Date> | null
  group_jay: Array<string>
  group_jedediah: Array<Date>
  group_shanny: Date
  group_toby: string
  group_ulices: Array<string> | null
  id_gay: string
  id_hailee: any
  id_helen: Array<number> | null
  id_ike: Array<string>
  id_joan: Array<string> | null
  id_karelle: string | null
  id_lavern: Date
  id_margarita: string | null
  id_maximilian: Array<string>
  id_william: Array<string>
  id_wilmer: Array<string> | null
  'kebab-a': DeliciousKebab | null
  'kebab-b': DeliciousKebab
  name_amara: string | null
  name_brionna: number
  name_enoch: string
  name_jermain: Array<string> | null
  name_marielle: string | null
  name_myrtle: Array<string> | null
  name_santos: Array<string>
  name_skye: string | null
  name_stephanie: boolean
  password_alessia: Array<string> | null
  password_camylle: Array<string>
  password_elenora: number | null
  password_felton: Array<Date> | null
  password_korey: number
  password_murphy: Array<any> | null
  password_vladimir: number | null
  phone_angelo: string
  phone_colten: number
  phone_erling: Array<string> | null
  phone_johanna: Array<Date> | null
  phone_kendall: Array<number>
  phone_keyshawn: string | null
  phone_maryam: string | null
  phone_osvaldo: Array<Date>
  phone_rupert: any | null
  snakes_on_a: SnakesOn | null
  snakes_on_b: SnakesOn
  status_amalia: number
  status_angelica: Array<number> | null
  status_cade: Array<number>
  status_lori: string | null
  status_ricky: number
  status_sid: Array<boolean> | null
  title_aidan: Date | null
  title_alexzander: string
  title_haylee: Array<string> | null
  title_ilene: Array<any>
  title_vicenta: string | null
  title_vivienne: Array<number>
  token_adella: Array<Date>
  token_hermann: Array<string>
  token_kenyon: Array<string>
  token_marianna: Array<string> | null
  token_rubye: string
  token_ryley: string | null
  token_zora: Array<number>
  updatedat_aaliyah: number | null
  updatedat_abe: Array<string> | null
  updatedat_brett: Array<string> | null
  updatedat_cedrick: Array<boolean>
  updatedat_derick: Array<any>
  updatedat_eli: Array<string>
  updatedat_ewell: Array<string>
  updatedat_laura: Array<string> | null
  updatedat_melody: Array<number>
  updatedat_rossie: number | null
}

export interface UserEntity {
  id: number
  name: string | null
  name2: string
  name3: string
  other_id: number
  other_primary_id: number
}


`

exports['test/cli.js > TAP > generates types with pascal case enums > must match snapshot 1'] = `
export enum DeliciousKebab {
  BigMix = 'big-mix',
  Mix = 'mix',
}

export enum Fruits {
  Apple = 'apple',
  Banana = 'banana',
  Orange = 'orange',
}

export enum NumericNames {
  '1Name' = '1name',
  '2Name' = '2Name',
  '3Name' = '3-name',
  '4Name' = '4_name',
}

export enum SnakesOn {
  APlane = 'a_plane',
}

export interface AddressEntity {
  id: number
}

export interface HistoryEntity {
  id: number
}

export interface KebabTestEntity {
  id: number
}

export interface MaterializedItemEntity {
  test: number | null
  test_array: Array<number> | null
  test_text: string | null
  test_timestamp: Date | null
}

export interface MaterializedOtherItemEntity {
  test: number | null
  test_text: string | null
}

export interface SnakeTestEntity {
  id: number
}

export interface SomeViewEntity {
  test: number | null
  test_text: string | null
}

export interface TypeEntity {
  avatar_darren: Array<number> | null
  avatar_ernestina: string
  avatar_mark: Array<any> | null
  avatar_myah: Array<string>
  avatar_rozella: Array<string>
  camelCase: boolean | null
  category_amari: string
  category_april: Array<string>
  category_buddy: Array<string> | null
  category_clementine: number | null
  category_marcelle: Date | null
  category_roberta: boolean | null
  category_trent: any | null
  category_viola: string
  comment_cali: string
  comment_delilah: Array<string> | null
  comment_easter: Date | null
  comment_ella: string
  comment_myles: string
  comment_rocio: string | null
  createdat_hulda: any
  createdat_pansy: Array<number> | null
  email_andres: Date
  email_cleveland: string | null
  email_keaton: Array<number> | null
  email_lucio: string | null
  email_paris: string
  email_paula: string | null
  email_ressie: string
  fruit_a: Fruits | null
  fruit_b: Fruits
  group_abigayle: Array<string>
  group_gabe: Array<Date> | null
  group_jay: Array<string>
  group_jedediah: Array<Date>
  group_shanny: Date
  group_toby: string
  group_ulices: Array<string> | null
  id_gay: string
  id_hailee: any
  id_helen: Array<number> | null
  id_ike: Array<string>
  id_joan: Array<string> | null
  id_karelle: string | null
  id_lavern: Date
  id_margarita: string | null
  id_maximilian: Array<string>
  id_william: Array<string>
  id_wilmer: Array<string> | null
  'kebab-a': DeliciousKebab | null
  'kebab-b': DeliciousKebab
  name_amara: string | null
  name_brionna: number
  name_enoch: string
  name_jermain: Array<string> | null
  name_marielle: string | null
  name_myrtle: Array<string> | null
  name_santos: Array<string>
  name_skye: string | null
  name_stephanie: boolean
  password_alessia: Array<string> | null
  password_camylle: Array<string>
  password_elenora: number | null
  password_felton: Array<Date> | null
  password_korey: number
  password_murphy: Array<any> | null
  password_vladimir: number | null
  phone_angelo: string
  phone_colten: number
  phone_erling: Array<string> | null
  phone_johanna: Array<Date> | null
  phone_kendall: Array<number>
  phone_keyshawn: string | null
  phone_maryam: string | null
  phone_osvaldo: Array<Date>
  phone_rupert: any | null
  snakes_on_a: SnakesOn | null
  snakes_on_b: SnakesOn
  status_amalia: number
  status_angelica: Array<number> | null
  status_cade: Array<number>
  status_lori: string | null
  status_ricky: number
  status_sid: Array<boolean> | null
  title_aidan: Date | null
  title_alexzander: string
  title_haylee: Array<string> | null
  title_ilene: Array<any>
  title_vicenta: string | null
  title_vivienne: Array<number>
  token_adella: Array<Date>
  token_hermann: Array<string>
  token_kenyon: Array<string>
  token_marianna: Array<string> | null
  token_rubye: string
  token_ryley: string | null
  token_zora: Array<number>
  updatedat_aaliyah: number | null
  updatedat_abe: Array<string> | null
  updatedat_brett: Array<string> | null
  updatedat_cedrick: Array<boolean>
  updatedat_derick: Array<any>
  updatedat_eli: Array<string>
  updatedat_ewell: Array<string>
  updatedat_laura: Array<string> | null
  updatedat_melody: Array<number>
  updatedat_rossie: number | null
}

export interface UserEntity {
  id: number
  name: string | null
  name2: string
  name3: string
  other_id: number
  other_primary_id: number
}


`

exports['test/cli.js > TAP > generates types with semicolons option > must match snapshot 1'] = `
export enum DeliciousKebab {
  'big-mix' = 'big-mix',
  mix = 'mix',
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  orange = 'orange',
}

export enum NumericNames {
  '1name' = '1name',
  '2Name' = '2Name',
  '3-name' = '3-name',
  '4_name' = '4_name',
}

export enum SnakesOn {
  a_plane = 'a_plane',
}

export interface AddressEntity {
  id: number;
};

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

export interface SomeViewEntity {
  test: number | null;
  test_text: string | null;
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
  id_ike: Array<string>;
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
  name_enoch: string;
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
  token_ryley: string | null;
  token_zora: Array<number>;
  updatedat_aaliyah: number | null;
  updatedat_abe: Array<string> | null;
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

exports['test/cli.js > TAP > generates types with types option > must match snapshot 1'] = `
export enum DeliciousKebab {
  'big-mix' = 'big-mix',
  mix = 'mix',
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  orange = 'orange',
}

export enum NumericNames {
  '1name' = '1name',
  '2Name' = '2Name',
  '3-name' = '3-name',
  '4_name' = '4_name',
}

export enum SnakesOn {
  a_plane = 'a_plane',
}

export type AddressEntity = {
  id: number
}

export type HistoryEntity = {
  id: number
}

export type KebabTestEntity = {
  id: number
}

export type MaterializedItemEntity = {
  test: number | null
  test_array: Array<number> | null
  test_text: string | null
  test_timestamp: Date | null
}

export type MaterializedOtherItemEntity = {
  test: number | null
  test_text: string | null
}

export type SnakeTestEntity = {
  id: number
}

export type SomeViewEntity = {
  test: number | null
  test_text: string | null
}

export type TypeEntity = {
  avatar_darren: Array<number> | null
  avatar_ernestina: string
  avatar_mark: Array<any> | null
  avatar_myah: Array<string>
  avatar_rozella: Array<string>
  camelCase: boolean | null
  category_amari: string
  category_april: Array<string>
  category_buddy: Array<string> | null
  category_clementine: number | null
  category_marcelle: Date | null
  category_roberta: boolean | null
  category_trent: any | null
  category_viola: string
  comment_cali: string
  comment_delilah: Array<string> | null
  comment_easter: Date | null
  comment_ella: string
  comment_myles: string
  comment_rocio: string | null
  createdat_hulda: any
  createdat_pansy: Array<number> | null
  email_andres: Date
  email_cleveland: string | null
  email_keaton: Array<number> | null
  email_lucio: string | null
  email_paris: string
  email_paula: string | null
  email_ressie: string
  fruit_a: Fruits | null
  fruit_b: Fruits
  group_abigayle: Array<string>
  group_gabe: Array<Date> | null
  group_jay: Array<string>
  group_jedediah: Array<Date>
  group_shanny: Date
  group_toby: string
  group_ulices: Array<string> | null
  id_gay: string
  id_hailee: any
  id_helen: Array<number> | null
  id_ike: Array<string>
  id_joan: Array<string> | null
  id_karelle: string | null
  id_lavern: Date
  id_margarita: string | null
  id_maximilian: Array<string>
  id_william: Array<string>
  id_wilmer: Array<string> | null
  'kebab-a': DeliciousKebab | null
  'kebab-b': DeliciousKebab
  name_amara: string | null
  name_brionna: number
  name_enoch: string
  name_jermain: Array<string> | null
  name_marielle: string | null
  name_myrtle: Array<string> | null
  name_santos: Array<string>
  name_skye: string | null
  name_stephanie: boolean
  password_alessia: Array<string> | null
  password_camylle: Array<string>
  password_elenora: number | null
  password_felton: Array<Date> | null
  password_korey: number
  password_murphy: Array<any> | null
  password_vladimir: number | null
  phone_angelo: string
  phone_colten: number
  phone_erling: Array<string> | null
  phone_johanna: Array<Date> | null
  phone_kendall: Array<number>
  phone_keyshawn: string | null
  phone_maryam: string | null
  phone_osvaldo: Array<Date>
  phone_rupert: any | null
  snakes_on_a: SnakesOn | null
  snakes_on_b: SnakesOn
  status_amalia: number
  status_angelica: Array<number> | null
  status_cade: Array<number>
  status_lori: string | null
  status_ricky: number
  status_sid: Array<boolean> | null
  title_aidan: Date | null
  title_alexzander: string
  title_haylee: Array<string> | null
  title_ilene: Array<any>
  title_vicenta: string | null
  title_vivienne: Array<number>
  token_adella: Array<Date>
  token_hermann: Array<string>
  token_kenyon: Array<string>
  token_marianna: Array<string> | null
  token_rubye: string
  token_ryley: string | null
  token_zora: Array<number>
  updatedat_aaliyah: number | null
  updatedat_abe: Array<string> | null
  updatedat_brett: Array<string> | null
  updatedat_cedrick: Array<boolean>
  updatedat_derick: Array<any>
  updatedat_eli: Array<string>
  updatedat_ewell: Array<string>
  updatedat_laura: Array<string> | null
  updatedat_melody: Array<number>
  updatedat_rossie: number | null
}

export type UserEntity = {
  id: number
  name: string | null
  name2: string
  name3: string
  other_id: number
  other_primary_id: number
}


`

exports['test/cli.js > TAP > help > must match snapshot 1'] = `
Usage: pg-typegen [options] <connection>

Options:
  -V, --version              output the version number
  -f, --suffix  <suffix>     suffix to append to generated table type, e.g. item -> ItemEntity (default: "Entity")
  -s, --schema  <schema>     schema (default: "public")
  -h, --header  <header>     header content (default: "")
  -o, --output  <output>     file output path (default: "stdout")
  -e, --exclude <exclude>    excluded tables and enums as comma separated string e.g. knex_migrations,knex_migrations_lock (default: [])
  --type                     use type definitions instead of interfaces in generated output (default: false)
  --semicolons               use semicolons in generated types (default: false)
  --ssl                      use ssl (default: false)
  --optionals                use optionals "?" instead of null (default: false)
  --comments                 generate table and column comments (default: false)
  --pascal-enums             transform enum keys to pascal case (default: false)
  --bigint                   use bigint for int8 types instead of strings (default: false)
  --date-as-string           use string for date types instead of javascript Date object (default: false)
  --insert-types             generate separate insert types with optional fields for columns allowing NULL value or having default values (default: false)
  --table-names              generate string literal type with all table names (default: false)
  --help                     display help for command

Example:
  $ pg-typegen -o ./entities.ts postgres://username:password@localhost:5432/database

`

exports['test/cli.js > TAP > missing connection string > must match snapshot 1'] = `
Usage: pg-typegen [options] <connection>

Options:
  -V, --version              output the version number
  -f, --suffix  <suffix>     suffix to append to generated table type, e.g. item -> ItemEntity (default: "Entity")
  -s, --schema  <schema>     schema (default: "public")
  -h, --header  <header>     header content (default: "")
  -o, --output  <output>     file output path (default: "stdout")
  -e, --exclude <exclude>    excluded tables and enums as comma separated string e.g. knex_migrations,knex_migrations_lock (default: [])
  --type                     use type definitions instead of interfaces in generated output (default: false)
  --semicolons               use semicolons in generated types (default: false)
  --ssl                      use ssl (default: false)
  --optionals                use optionals "?" instead of null (default: false)
  --comments                 generate table and column comments (default: false)
  --pascal-enums             transform enum keys to pascal case (default: false)
  --bigint                   use bigint for int8 types instead of strings (default: false)
  --date-as-string           use string for date types instead of javascript Date object (default: false)
  --insert-types             generate separate insert types with optional fields for columns allowing NULL value or having default values (default: false)
  --table-names              generate string literal type with all table names (default: false)
  --help                     display help for command

Example:
  $ pg-typegen -o ./entities.ts postgres://username:password@localhost:5432/database

`

exports['test/cli.js > TAP > version > must match snapshot 1'] = `
v{v}

`
