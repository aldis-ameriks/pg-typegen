/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports['cjs/test/typescript.js > TAP > using interfaces > must match snapshot 1'] = `
export enum Apples {}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum CustomEnum {
  'foo   bar3' = 'foo   bar3',
  'foo  ---- ____ ---   bar6' = 'foo  ---- ____ ---   bar6',
  'foo bar' = 'foo bar',
  'foo----bar4' = 'foo----bar4',
  'foo-bar2' = 'foo-bar2',
  foo____bar5 = 'foo____bar5',
  value_one = 'value_one',
  value_two = 'value_two',
}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum Empty {}

export enum KebabCase1 {}

export enum KebabCase2 {
  'kebab-case-value' = 'kebab-case-value',
}

export enum WhiteSpace {
  'white space value' = 'white space value',
}

export interface AddressEntity {};

export interface AppleEntity {};

export interface CustomEntity {
  custom1: CustomType;
  custom2: CustomType;
  custom3: CustomType;
  custom4: Array<CustomType>;
  custom5: Array<CustomType>;
  custom6: Array<CustomType>;
};

export interface DefaultEntity {
  one: number;
  two: number | null;
};

export interface DefaultsNoColumnEntity {};

export interface EmptyEntity {};

export interface EntityEntity {
  duplicate: number;
  duplicate: number;
};

export interface KebabCaseEntity {
  'kebab-case1': number | null;
  'kebab-case2': number;
};

export interface KnownEntity {
  known1: number;
  known2: number | null;
  known3: number | null;
  known4: number;
  known5: string | null;
  known6: string;
};

export interface SnakeCaseEntity {
  snake_case1: number | null;
  snake_case2: number;
};

export interface UnknownEntity {
  unknown1: any | null;
  unknown2: any;
  unknown3: Array<any> | null;
  unknown4: Array<any>;
};

export interface UpperCaseEntity {
  duplicate: number;
  duplicate: number;
};

export interface ViewEntity {
  one: number;
  two: number | null;
};

export interface WhiteSpaceEntity {
  'white space 1': number | null;
  'white space 2': number;
};

`

exports['cjs/test/typescript.js > TAP > using interfaces > must match snapshot 2'] = `
export enum Apples {}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum CustomEnum {
  'foo   bar3' = 'foo   bar3',
  'foo  ---- ____ ---   bar6' = 'foo  ---- ____ ---   bar6',
  'foo bar' = 'foo bar',
  'foo----bar4' = 'foo----bar4',
  'foo-bar2' = 'foo-bar2',
  foo____bar5 = 'foo____bar5',
  value_one = 'value_one',
  value_two = 'value_two',
}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum Empty {}

export enum KebabCase1 {}

export enum KebabCase2 {
  'kebab-case-value' = 'kebab-case-value',
}

export enum WhiteSpace {
  'white space value' = 'white space value',
}

export interface AddressEntity {}

export interface AppleEntity {}

export interface CustomEntity {
  custom1: CustomType
  custom2: CustomType
  custom3: CustomType
  custom4: Array<CustomType>
  custom5: Array<CustomType>
  custom6: Array<CustomType>
}

export interface DefaultEntity {
  one: number
  two: number | null
}

export interface DefaultsNoColumnEntity {}

export interface EmptyEntity {}

export interface EntityEntity {
  duplicate: number
  duplicate: number
}

export interface KebabCaseEntity {
  'kebab-case1': number | null
  'kebab-case2': number
}

export interface KnownEntity {
  known1: number
  known2: number | null
  known3: number | null
  known4: number
  known5: string | null
  known6: string
}

export interface SnakeCaseEntity {
  snake_case1: number | null
  snake_case2: number
}

export interface UnknownEntity {
  unknown1: any | null
  unknown2: any
  unknown3: Array<any> | null
  unknown4: Array<any>
}

export interface UpperCaseEntity {
  duplicate: number
  duplicate: number
}

export interface ViewEntity {
  one: number
  two: number | null
}

export interface WhiteSpaceEntity {
  'white space 1': number | null
  'white space 2': number
}

`

exports['cjs/test/typescript.js > TAP > using types > must match snapshot 1'] = `
export enum Apples {}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum CustomEnum {
  'foo   bar3' = 'foo   bar3',
  'foo  ---- ____ ---   bar6' = 'foo  ---- ____ ---   bar6',
  'foo bar' = 'foo bar',
  'foo----bar4' = 'foo----bar4',
  'foo-bar2' = 'foo-bar2',
  foo____bar5 = 'foo____bar5',
  value_one = 'value_one',
  value_two = 'value_two',
}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum Empty {}

export enum KebabCase1 {}

export enum KebabCase2 {
  'kebab-case-value' = 'kebab-case-value',
}

export enum WhiteSpace {
  'white space value' = 'white space value',
}

export type AddressEntity = {};

export type AppleEntity = {};

export type CustomEntity = {
  custom1: CustomType;
  custom2: CustomType;
  custom3: CustomType;
  custom4: Array<CustomType>;
  custom5: Array<CustomType>;
  custom6: Array<CustomType>;
};

export type DefaultEntity = {
  one: number;
  two: number | null;
};

export type DefaultsNoColumnEntity = {};

export type EmptyEntity = {};

export type EntityEntity = {
  duplicate: number;
  duplicate: number;
};

export type KebabCaseEntity = {
  'kebab-case1': number | null;
  'kebab-case2': number;
};

export type KnownEntity = {
  known1: number;
  known2: number | null;
  known3: number | null;
  known4: number;
  known5: string | null;
  known6: string;
};

export type SnakeCaseEntity = {
  snake_case1: number | null;
  snake_case2: number;
};

export type UnknownEntity = {
  unknown1: any | null;
  unknown2: any;
  unknown3: Array<any> | null;
  unknown4: Array<any>;
};

export type UpperCaseEntity = {
  duplicate: number;
  duplicate: number;
};

export type ViewEntity = {
  one: number;
  two: number | null;
};

export type WhiteSpaceEntity = {
  'white space 1': number | null;
  'white space 2': number;
};

`

exports['cjs/test/typescript.js > TAP > using types > must match snapshot 2'] = `
export enum Apples {}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum CustomEnum {
  'foo   bar3' = 'foo   bar3',
  'foo  ---- ____ ---   bar6' = 'foo  ---- ____ ---   bar6',
  'foo bar' = 'foo bar',
  'foo----bar4' = 'foo----bar4',
  'foo-bar2' = 'foo-bar2',
  foo____bar5 = 'foo____bar5',
  value_one = 'value_one',
  value_two = 'value_two',
}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum Empty {}

export enum KebabCase1 {}

export enum KebabCase2 {
  'kebab-case-value' = 'kebab-case-value',
}

export enum WhiteSpace {
  'white space value' = 'white space value',
}

export type AddressEntity = {}

export type AppleEntity = {}

export type CustomEntity = {
  custom1: CustomType
  custom2: CustomType
  custom3: CustomType
  custom4: Array<CustomType>
  custom5: Array<CustomType>
  custom6: Array<CustomType>
}

export type DefaultEntity = {
  one: number
  two: number | null
}

export type DefaultsNoColumnEntity = {}

export type EmptyEntity = {}

export type EntityEntity = {
  duplicate: number
  duplicate: number
}

export type KebabCaseEntity = {
  'kebab-case1': number | null
  'kebab-case2': number
}

export type KnownEntity = {
  known1: number
  known2: number | null
  known3: number | null
  known4: number
  known5: string | null
  known6: string
}

export type SnakeCaseEntity = {
  snake_case1: number | null
  snake_case2: number
}

export type UnknownEntity = {
  unknown1: any | null
  unknown2: any
  unknown3: Array<any> | null
  unknown4: Array<any>
}

export type UpperCaseEntity = {
  duplicate: number
  duplicate: number
}

export type ViewEntity = {
  one: number
  two: number | null
}

export type WhiteSpaceEntity = {
  'white space 1': number | null
  'white space 2': number
}

`

exports['cjs/test/typescript.js > TAP > with custom suffix > must match snapshot 1'] = `
export enum Apples {}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum CustomEnum {
  'foo   bar3' = 'foo   bar3',
  'foo  ---- ____ ---   bar6' = 'foo  ---- ____ ---   bar6',
  'foo bar' = 'foo bar',
  'foo----bar4' = 'foo----bar4',
  'foo-bar2' = 'foo-bar2',
  foo____bar5 = 'foo____bar5',
  value_one = 'value_one',
  value_two = 'value_two',
}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum Empty {}

export enum KebabCase1 {}

export enum KebabCase2 {
  'kebab-case-value' = 'kebab-case-value',
}

export enum WhiteSpace {
  'white space value' = 'white space value',
}

export interface AddressRecord {};

export interface AppleRecord {};

export interface CustomRecord {
  custom1: CustomType;
  custom2: CustomType;
  custom3: CustomType;
  custom4: Array<CustomType>;
  custom5: Array<CustomType>;
  custom6: Array<CustomType>;
};

export interface DefaultRecord {
  one: number;
  two: number | null;
};

export interface DefaultsNoColumnRecord {};

export interface EmptyRecord {};

export interface EntityRecord {
  duplicate: number;
  duplicate: number;
};

export interface KebabCaseRecord {
  'kebab-case1': number | null;
  'kebab-case2': number;
};

export interface KnownRecord {
  known1: number;
  known2: number | null;
  known3: number | null;
  known4: number;
  known5: string | null;
  known6: string;
};

export interface SnakeCaseRecord {
  snake_case1: number | null;
  snake_case2: number;
};

export interface UnknownRecord {
  unknown1: any | null;
  unknown2: any;
  unknown3: Array<any> | null;
  unknown4: Array<any>;
};

export interface UpperCaseRecord {
  duplicate: number;
  duplicate: number;
};

export interface ViewRecord {
  one: number;
  two: number | null;
};

export interface WhiteSpaceRecord {
  'white space 1': number | null;
  'white space 2': number;
};

`

exports['cjs/test/typescript.js > TAP > with generated insert types > must match snapshot 1'] = `
export enum Apples {}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum CustomEnum {
  'foo   bar3' = 'foo   bar3',
  'foo  ---- ____ ---   bar6' = 'foo  ---- ____ ---   bar6',
  'foo bar' = 'foo bar',
  'foo----bar4' = 'foo----bar4',
  'foo-bar2' = 'foo-bar2',
  foo____bar5 = 'foo____bar5',
  value_one = 'value_one',
  value_two = 'value_two',
}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum Empty {}

export enum KebabCase1 {}

export enum KebabCase2 {
  'kebab-case-value' = 'kebab-case-value',
}

export enum WhiteSpace {
  'white space value' = 'white space value',
}

export interface AddressEntity {};

export interface AddressInsertEntity {};

export interface AppleEntity {};

export interface AppleInsertEntity {};

export interface CustomEntity {
  custom1: CustomType;
  custom2: CustomType;
  custom3: CustomType;
  custom4: Array<CustomType>;
  custom5: Array<CustomType>;
  custom6: Array<CustomType>;
};

export interface CustomInsertEntity {
  custom1: CustomType;
  custom2: CustomType;
  custom3: CustomType;
  custom4: Array<CustomType>;
  custom5: Array<CustomType>;
  custom6: Array<CustomType>;
};

export interface DefaultEntity {
  one: number;
  two: number | null;
};

export interface DefaultInsertEntity {
  one?: number;
  two?: number | null;
};

export interface DefaultsNoColumnEntity {};

export interface DefaultsNoColumnInsertEntity {};

export interface EmptyEntity {};

export interface EmptyInsertEntity {};

export interface EntityEntity {
  duplicate: number;
  duplicate: number;
};

export interface EntityInsertEntity {
  duplicate: number;
  duplicate: number;
};

export interface KebabCaseEntity {
  'kebab-case1': number | null;
  'kebab-case2': number;
};

export interface KebabCaseInsertEntity {
  'kebab-case1'?: number | null;
  'kebab-case2': number;
};

export interface KnownEntity {
  known1: number;
  known2: number | null;
  known3: number | null;
  known4: number;
  known5: string | null;
  known6: string;
};

export interface KnownInsertEntity {
  known1: number;
  known2?: number | null;
  known3?: number | null;
  known4: number;
  known5?: string | null;
  known6: string;
};

export interface SnakeCaseEntity {
  snake_case1: number | null;
  snake_case2: number;
};

export interface SnakeCaseInsertEntity {
  snake_case1?: number | null;
  snake_case2: number;
};

export interface UnknownEntity {
  unknown1: any | null;
  unknown2: any;
  unknown3: Array<any> | null;
  unknown4: Array<any>;
};

export interface UnknownInsertEntity {
  unknown1?: any | null;
  unknown2: any;
  unknown3?: Array<any> | null;
  unknown4: Array<any>;
};

export interface UpperCaseEntity {
  duplicate: number;
  duplicate: number;
};

export interface UpperCaseInsertEntity {
  duplicate: number;
  duplicate: number;
};

export interface ViewEntity {
  one: number;
  two: number | null;
};

export interface WhiteSpaceEntity {
  'white space 1': number | null;
  'white space 2': number;
};

export interface WhiteSpaceInsertEntity {
  'white space 1'?: number | null;
  'white space 2': number;
};

`

exports['cjs/test/typescript.js > TAP > with generated insert types with optionals > must match snapshot 1'] = `
export enum Apples {}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum CustomEnum {
  'foo   bar3' = 'foo   bar3',
  'foo  ---- ____ ---   bar6' = 'foo  ---- ____ ---   bar6',
  'foo bar' = 'foo bar',
  'foo----bar4' = 'foo----bar4',
  'foo-bar2' = 'foo-bar2',
  foo____bar5 = 'foo____bar5',
  value_one = 'value_one',
  value_two = 'value_two',
}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum Empty {}

export enum KebabCase1 {}

export enum KebabCase2 {
  'kebab-case-value' = 'kebab-case-value',
}

export enum WhiteSpace {
  'white space value' = 'white space value',
}

export interface AddressEntity {};

export interface AddressInsertEntity {};

export interface AppleEntity {};

export interface AppleInsertEntity {};

export interface CustomEntity {
  custom1: CustomType;
  custom2: CustomType;
  custom3: CustomType;
  custom4: Array<CustomType>;
  custom5: Array<CustomType>;
  custom6: Array<CustomType>;
};

export interface CustomInsertEntity {
  custom1: CustomType;
  custom2: CustomType;
  custom3: CustomType;
  custom4: Array<CustomType>;
  custom5: Array<CustomType>;
  custom6: Array<CustomType>;
};

export interface DefaultEntity {
  one: number;
  two?: number;
};

export interface DefaultInsertEntity {
  one?: number;
  two?: number;
};

export interface DefaultsNoColumnEntity {};

export interface DefaultsNoColumnInsertEntity {};

export interface EmptyEntity {};

export interface EmptyInsertEntity {};

export interface EntityEntity {
  duplicate: number;
  duplicate: number;
};

export interface EntityInsertEntity {
  duplicate: number;
  duplicate: number;
};

export interface KebabCaseEntity {
  'kebab-case1'?: number;
  'kebab-case2': number;
};

export interface KebabCaseInsertEntity {
  'kebab-case1'?: number;
  'kebab-case2': number;
};

export interface KnownEntity {
  known1: number;
  known2?: number;
  known3?: number;
  known4: number;
  known5?: string;
  known6: string;
};

export interface KnownInsertEntity {
  known1: number;
  known2?: number;
  known3?: number;
  known4: number;
  known5?: string;
  known6: string;
};

export interface SnakeCaseEntity {
  snake_case1?: number;
  snake_case2: number;
};

export interface SnakeCaseInsertEntity {
  snake_case1?: number;
  snake_case2: number;
};

export interface UnknownEntity {
  unknown1?: any;
  unknown2: any;
  unknown3?: Array<any>;
  unknown4: Array<any>;
};

export interface UnknownInsertEntity {
  unknown1?: any;
  unknown2: any;
  unknown3?: Array<any>;
  unknown4: Array<any>;
};

export interface UpperCaseEntity {
  duplicate: number;
  duplicate: number;
};

export interface UpperCaseInsertEntity {
  duplicate: number;
  duplicate: number;
};

export interface ViewEntity {
  one: number;
  two?: number;
};

export interface WhiteSpaceEntity {
  'white space 1'?: number;
  'white space 2': number;
};

export interface WhiteSpaceInsertEntity {
  'white space 1'?: number;
  'white space 2': number;
};

`

exports['cjs/test/typescript.js > TAP > with header > must match snapshot 1'] = `
/* eslint-disable */

export enum Apples {}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum CustomEnum {
  'foo   bar3' = 'foo   bar3',
  'foo  ---- ____ ---   bar6' = 'foo  ---- ____ ---   bar6',
  'foo bar' = 'foo bar',
  'foo----bar4' = 'foo----bar4',
  'foo-bar2' = 'foo-bar2',
  foo____bar5 = 'foo____bar5',
  value_one = 'value_one',
  value_two = 'value_two',
}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum Empty {}

export enum KebabCase1 {}

export enum KebabCase2 {
  'kebab-case-value' = 'kebab-case-value',
}

export enum WhiteSpace {
  'white space value' = 'white space value',
}

export interface AddressEntity {};

export interface AppleEntity {};

export interface CustomEntity {
  custom1: CustomType;
  custom2: CustomType;
  custom3: CustomType;
  custom4: Array<CustomType>;
  custom5: Array<CustomType>;
  custom6: Array<CustomType>;
};

export interface DefaultEntity {
  one: number;
  two: number | null;
};

export interface DefaultsNoColumnEntity {};

export interface EmptyEntity {};

export interface EntityEntity {
  duplicate: number;
  duplicate: number;
};

export interface KebabCaseEntity {
  'kebab-case1': number | null;
  'kebab-case2': number;
};

export interface KnownEntity {
  known1: number;
  known2: number | null;
  known3: number | null;
  known4: number;
  known5: string | null;
  known6: string;
};

export interface SnakeCaseEntity {
  snake_case1: number | null;
  snake_case2: number;
};

export interface UnknownEntity {
  unknown1: any | null;
  unknown2: any;
  unknown3: Array<any> | null;
  unknown4: Array<any>;
};

export interface UpperCaseEntity {
  duplicate: number;
  duplicate: number;
};

export interface ViewEntity {
  one: number;
  two: number | null;
};

export interface WhiteSpaceEntity {
  'white space 1': number | null;
  'white space 2': number;
};

`

exports['cjs/test/typescript.js > TAP > with optionals > must match snapshot 1'] = `
export enum Apples {}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum CustomEnum {
  'foo   bar3' = 'foo   bar3',
  'foo  ---- ____ ---   bar6' = 'foo  ---- ____ ---   bar6',
  'foo bar' = 'foo bar',
  'foo----bar4' = 'foo----bar4',
  'foo-bar2' = 'foo-bar2',
  foo____bar5 = 'foo____bar5',
  value_one = 'value_one',
  value_two = 'value_two',
}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum Empty {}

export enum KebabCase1 {}

export enum KebabCase2 {
  'kebab-case-value' = 'kebab-case-value',
}

export enum WhiteSpace {
  'white space value' = 'white space value',
}

export interface AddressEntity {};

export interface AppleEntity {};

export interface CustomEntity {
  custom1: CustomType;
  custom2: CustomType;
  custom3: CustomType;
  custom4: Array<CustomType>;
  custom5: Array<CustomType>;
  custom6: Array<CustomType>;
};

export interface DefaultEntity {
  one: number;
  two?: number;
};

export interface DefaultsNoColumnEntity {};

export interface EmptyEntity {};

export interface EntityEntity {
  duplicate: number;
  duplicate: number;
};

export interface KebabCaseEntity {
  'kebab-case1'?: number;
  'kebab-case2': number;
};

export interface KnownEntity {
  known1: number;
  known2?: number;
  known3?: number;
  known4: number;
  known5?: string;
  known6: string;
};

export interface SnakeCaseEntity {
  snake_case1?: number;
  snake_case2: number;
};

export interface UnknownEntity {
  unknown1?: any;
  unknown2: any;
  unknown3?: Array<any>;
  unknown4: Array<any>;
};

export interface UpperCaseEntity {
  duplicate: number;
  duplicate: number;
};

export interface ViewEntity {
  one: number;
  two?: number;
};

export interface WhiteSpaceEntity {
  'white space 1'?: number;
  'white space 2': number;
};

`

exports['cjs/test/typescript.js > TAP > with pascal case enums > must match snapshot 1'] = `
export enum Apples {}

export enum CustomType {
  Bar = 'bar',
  Foo = 'foo',
}

export enum CustomType {
  Bar = 'bar',
  Foo = 'foo',
}

export enum CustomEnum {
  FooBar3 = 'foo   bar3',
  FooBar6 = 'foo  ---- ____ ---   bar6',
  FooBar = 'foo bar',
  FooBar4 = 'foo----bar4',
  FooBar2 = 'foo-bar2',
  Foobar5 = 'foo____bar5',
  ValueOne = 'value_one',
  ValueTwo = 'value_two',
}

export enum CustomType {
  Bar = 'bar',
  Foo = 'foo',
}

export enum Empty {}

export enum KebabCase1 {}

export enum KebabCase2 {
  KebabCaseValue = 'kebab-case-value',
}

export enum WhiteSpace {
  WhiteSpaceValue = 'white space value',
}

export interface AddressEntity {};

export interface AppleEntity {};

export interface CustomEntity {
  custom1: CustomType;
  custom2: CustomType;
  custom3: CustomType;
  custom4: Array<CustomType>;
  custom5: Array<CustomType>;
  custom6: Array<CustomType>;
};

export interface DefaultEntity {
  one: number;
  two: number | null;
};

export interface DefaultsNoColumnEntity {};

export interface EmptyEntity {};

export interface EntityEntity {
  duplicate: number;
  duplicate: number;
};

export interface KebabCaseEntity {
  'kebab-case1': number | null;
  'kebab-case2': number;
};

export interface KnownEntity {
  known1: number;
  known2: number | null;
  known3: number | null;
  known4: number;
  known5: string | null;
  known6: string;
};

export interface SnakeCaseEntity {
  snake_case1: number | null;
  snake_case2: number;
};

export interface UnknownEntity {
  unknown1: any | null;
  unknown2: any;
  unknown3: Array<any> | null;
  unknown4: Array<any>;
};

export interface UpperCaseEntity {
  duplicate: number;
  duplicate: number;
};

export interface ViewEntity {
  one: number;
  two: number | null;
};

export interface WhiteSpaceEntity {
  'white space 1': number | null;
  'white space 2': number;
};

`

exports['cjs/test/typescript.js > TAP > with table string literal > must match snapshot 1'] = `
export type Tables = 'addresses' | 'apples' | 'custom' | 'defaults' | 'defaults_no_columns' | 'empty' | 'entities' | 'kebab-case' | 'known' | 'snake_case' | 'unknown' | 'UpperCase' | 'white space';

export enum Apples {}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum CustomEnum {
  'foo   bar3' = 'foo   bar3',
  'foo  ---- ____ ---   bar6' = 'foo  ---- ____ ---   bar6',
  'foo bar' = 'foo bar',
  'foo----bar4' = 'foo----bar4',
  'foo-bar2' = 'foo-bar2',
  foo____bar5 = 'foo____bar5',
  value_one = 'value_one',
  value_two = 'value_two',
}

export enum CustomType {
  bar = 'bar',
  foo = 'foo',
}

export enum Empty {}

export enum KebabCase1 {}

export enum KebabCase2 {
  'kebab-case-value' = 'kebab-case-value',
}

export enum WhiteSpace {
  'white space value' = 'white space value',
}

export interface AddressEntity {};

export interface AppleEntity {};

export interface CustomEntity {
  custom1: CustomType;
  custom2: CustomType;
  custom3: CustomType;
  custom4: Array<CustomType>;
  custom5: Array<CustomType>;
  custom6: Array<CustomType>;
};

export interface DefaultEntity {
  one: number;
  two: number | null;
};

export interface DefaultsNoColumnEntity {};

export interface EmptyEntity {};

export interface EntityEntity {
  duplicate: number;
  duplicate: number;
};

export interface KebabCaseEntity {
  'kebab-case1': number | null;
  'kebab-case2': number;
};

export interface KnownEntity {
  known1: number;
  known2: number | null;
  known3: number | null;
  known4: number;
  known5: string | null;
  known6: string;
};

export interface SnakeCaseEntity {
  snake_case1: number | null;
  snake_case2: number;
};

export interface UnknownEntity {
  unknown1: any | null;
  unknown2: any;
  unknown3: Array<any> | null;
  unknown4: Array<any>;
};

export interface UpperCaseEntity {
  duplicate: number;
  duplicate: number;
};

export interface ViewEntity {
  one: number;
  two: number | null;
};

export interface WhiteSpaceEntity {
  'white space 1': number | null;
  'white space 2': number;
};

`

exports['cjs/test/typescript.js > TAP > without enums > must match snapshot 1'] = `
export interface AddressEntity {};

export interface AppleEntity {};

export interface CustomEntity {
  custom1: any;
  custom2: any;
  custom3: any;
  custom4: Array<any>;
  custom5: Array<any>;
  custom6: Array<any>;
};

export interface DefaultEntity {
  one: number;
  two?: number;
};

export interface DefaultsNoColumnEntity {};

export interface EmptyEntity {};

export interface EntityEntity {
  duplicate: number;
  duplicate: number;
};

export interface KebabCaseEntity {
  'kebab-case1'?: number;
  'kebab-case2': number;
};

export interface KnownEntity {
  known1: number;
  known2?: number;
  known3?: number;
  known4: number;
  known5?: string;
  known6: string;
};

export interface SnakeCaseEntity {
  snake_case1?: number;
  snake_case2: number;
};

export interface UnknownEntity {
  unknown1?: any;
  unknown2: any;
  unknown3?: Array<any>;
  unknown4: Array<any>;
};

export interface UpperCaseEntity {
  duplicate: number;
  duplicate: number;
};

export interface ViewEntity {
  one: number;
  two?: number;
};

export interface WhiteSpaceEntity {
  'white space 1'?: number;
  'white space 2': number;
};

`
