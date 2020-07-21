/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports['test/typescript.js TAP using interfaces > must match snapshot 1'] = `
export enum CustomEnum {
  value_one = 'value_one',
  value_two = 'value_two',
}

export enum Empty {}

export enum KebabCase1 {}

export enum KebabCase2 {
  'kebab-case-value' = 'kebab-case-value',
}

export enum WhiteSpace {
  'white space value' = 'white space value',
}

export enum Apples {}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export interface KnownEntity {
  known1: number;
  known2: number | null;
  known3: number | null;
  known4: number;
  known5: string | null;
  known6: string;
};

export interface UnknownEntity {
  unknown1: any | null;
  unknown2: any;
  unknown3: Array<any> | null;
  unknown4: Array<any>;
};

export interface SnakeCaseEntity {
  snake_case1: number | null;
  snake_case2: number;
};

export interface KebabCaseEntity {
  'kebab-case1': number | null;
  'kebab-case2': number;
};

export interface WhiteSpaceEntity {
  'white space 1': number | null;
  'white space 2': number;
};

export interface CustomEntity {
  custom1: CustomType;
  custom2: CustomType;
  custom3: CustomType;
  custom4: Array<CustomType>;
  custom5: Array<CustomType>;
  custom6: Array<CustomType>;
};

export interface EmptyEntity {};

export interface AppleEntity {};

`

exports['test/typescript.js TAP using interfaces > must match snapshot 2'] = `
export enum CustomEnum {
  value_one = 'value_one',
  value_two = 'value_two',
}

export enum Empty {}

export enum KebabCase1 {}

export enum KebabCase2 {
  'kebab-case-value' = 'kebab-case-value',
}

export enum WhiteSpace {
  'white space value' = 'white space value',
}

export enum Apples {}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export interface KnownEntity {
  known1: number
  known2: number | null
  known3: number | null
  known4: number
  known5: string | null
  known6: string
}

export interface UnknownEntity {
  unknown1: any | null
  unknown2: any
  unknown3: Array<any> | null
  unknown4: Array<any>
}

export interface SnakeCaseEntity {
  snake_case1: number | null
  snake_case2: number
}

export interface KebabCaseEntity {
  'kebab-case1': number | null
  'kebab-case2': number
}

export interface WhiteSpaceEntity {
  'white space 1': number | null
  'white space 2': number
}

export interface CustomEntity {
  custom1: CustomType
  custom2: CustomType
  custom3: CustomType
  custom4: Array<CustomType>
  custom5: Array<CustomType>
  custom6: Array<CustomType>
}

export interface EmptyEntity {}

export interface AppleEntity {}

`

exports['test/typescript.js TAP using types > must match snapshot 1'] = `
export enum CustomEnum {
  value_one = 'value_one',
  value_two = 'value_two',
}

export enum Empty {}

export enum KebabCase1 {}

export enum KebabCase2 {
  'kebab-case-value' = 'kebab-case-value',
}

export enum WhiteSpace {
  'white space value' = 'white space value',
}

export enum Apples {}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export type KnownEntity = {
  known1: number;
  known2: number | null;
  known3: number | null;
  known4: number;
  known5: string | null;
  known6: string;
};

export type UnknownEntity = {
  unknown1: any | null;
  unknown2: any;
  unknown3: Array<any> | null;
  unknown4: Array<any>;
};

export type SnakeCaseEntity = {
  snake_case1: number | null;
  snake_case2: number;
};

export type KebabCaseEntity = {
  'kebab-case1': number | null;
  'kebab-case2': number;
};

export type WhiteSpaceEntity = {
  'white space 1': number | null;
  'white space 2': number;
};

export type CustomEntity = {
  custom1: CustomType;
  custom2: CustomType;
  custom3: CustomType;
  custom4: Array<CustomType>;
  custom5: Array<CustomType>;
  custom6: Array<CustomType>;
};

export type EmptyEntity = {};

export type AppleEntity = {};

`

exports['test/typescript.js TAP using types > must match snapshot 2'] = `
export enum CustomEnum {
  value_one = 'value_one',
  value_two = 'value_two',
}

export enum Empty {}

export enum KebabCase1 {}

export enum KebabCase2 {
  'kebab-case-value' = 'kebab-case-value',
}

export enum WhiteSpace {
  'white space value' = 'white space value',
}

export enum Apples {}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export type KnownEntity = {
  known1: number
  known2: number | null
  known3: number | null
  known4: number
  known5: string | null
  known6: string
}

export type UnknownEntity = {
  unknown1: any | null
  unknown2: any
  unknown3: Array<any> | null
  unknown4: Array<any>
}

export type SnakeCaseEntity = {
  snake_case1: number | null
  snake_case2: number
}

export type KebabCaseEntity = {
  'kebab-case1': number | null
  'kebab-case2': number
}

export type WhiteSpaceEntity = {
  'white space 1': number | null
  'white space 2': number
}

export type CustomEntity = {
  custom1: CustomType
  custom2: CustomType
  custom3: CustomType
  custom4: Array<CustomType>
  custom5: Array<CustomType>
  custom6: Array<CustomType>
}

export type EmptyEntity = {}

export type AppleEntity = {}

`

exports['test/typescript.js TAP with custom suffix > must match snapshot 1'] = `
export enum CustomEnum {
  value_one = 'value_one',
  value_two = 'value_two',
}

export enum Empty {}

export enum KebabCase1 {}

export enum KebabCase2 {
  'kebab-case-value' = 'kebab-case-value',
}

export enum WhiteSpace {
  'white space value' = 'white space value',
}

export enum Apples {}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export interface KnownRecord {
  known1: number;
  known2: number | null;
  known3: number | null;
  known4: number;
  known5: string | null;
  known6: string;
};

export interface UnknownRecord {
  unknown1: any | null;
  unknown2: any;
  unknown3: Array<any> | null;
  unknown4: Array<any>;
};

export interface SnakeCaseRecord {
  snake_case1: number | null;
  snake_case2: number;
};

export interface KebabCaseRecord {
  'kebab-case1': number | null;
  'kebab-case2': number;
};

export interface WhiteSpaceRecord {
  'white space 1': number | null;
  'white space 2': number;
};

export interface CustomRecord {
  custom1: CustomType;
  custom2: CustomType;
  custom3: CustomType;
  custom4: Array<CustomType>;
  custom5: Array<CustomType>;
  custom6: Array<CustomType>;
};

export interface EmptyRecord {};

export interface AppleRecord {};

`

exports['test/typescript.js TAP with header > must match snapshot 1'] = `
/* eslint-disable */

export enum CustomEnum {
  value_one = 'value_one',
  value_two = 'value_two',
}

export enum Empty {}

export enum KebabCase1 {}

export enum KebabCase2 {
  'kebab-case-value' = 'kebab-case-value',
}

export enum WhiteSpace {
  'white space value' = 'white space value',
}

export enum Apples {}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export interface KnownEntity {
  known1: number;
  known2: number | null;
  known3: number | null;
  known4: number;
  known5: string | null;
  known6: string;
};

export interface UnknownEntity {
  unknown1: any | null;
  unknown2: any;
  unknown3: Array<any> | null;
  unknown4: Array<any>;
};

export interface SnakeCaseEntity {
  snake_case1: number | null;
  snake_case2: number;
};

export interface KebabCaseEntity {
  'kebab-case1': number | null;
  'kebab-case2': number;
};

export interface WhiteSpaceEntity {
  'white space 1': number | null;
  'white space 2': number;
};

export interface CustomEntity {
  custom1: CustomType;
  custom2: CustomType;
  custom3: CustomType;
  custom4: Array<CustomType>;
  custom5: Array<CustomType>;
  custom6: Array<CustomType>;
};

export interface EmptyEntity {};

export interface AppleEntity {};

`

exports['test/typescript.js TAP with optionals > must match snapshot 1'] = `
export enum CustomEnum {
  value_one = 'value_one',
  value_two = 'value_two',
}

export enum Empty {}

export enum KebabCase1 {}

export enum KebabCase2 {
  'kebab-case-value' = 'kebab-case-value',
}

export enum WhiteSpace {
  'white space value' = 'white space value',
}

export enum Apples {}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export enum CustomType {
  foo = 'foo',
  bar = 'bar',
}

export interface KnownEntity {
  known1: number;
  known2?: number;
  known3?: number;
  known4: number;
  known5?: string;
  known6: string;
};

export interface UnknownEntity {
  unknown1?: any;
  unknown2: any;
  unknown3?: Array<any>;
  unknown4: Array<any>;
};

export interface SnakeCaseEntity {
  snake_case1?: number;
  snake_case2: number;
};

export interface KebabCaseEntity {
  'kebab-case1'?: number;
  'kebab-case2': number;
};

export interface WhiteSpaceEntity {
  'white space 1'?: number;
  'white space 2': number;
};

export interface CustomEntity {
  custom1: CustomType;
  custom2: CustomType;
  custom3: CustomType;
  custom4: Array<CustomType>;
  custom5: Array<CustomType>;
  custom6: Array<CustomType>;
};

export interface EmptyEntity {};

export interface AppleEntity {};

`
