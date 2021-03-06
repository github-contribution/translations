export { IMessages } from './base';
import { IMessages } from './base';

export type NumberFormat =
  | ''
  | 'comma-period'
  | 'period-comma'
  | 'space-comma'

export type NumberFormatDef = {
  [K in NumberFormat]?: INumberFormat
}
export type NumberFormatExample = {
  [K in NumberFormat]: string;
}

export interface ILangPack {
  name: string;
  dir: 'ltr'|'rtl';
  numbers: NumberFormat;
  messages: IMessages;
  contributors: Array<{
    name: string;
    href?: string;
  }>;
}

export interface INumberFormat {
  group: string;
  group_regex: RegExp;
  decimal: string;
  decimal_regex: RegExp;
}

export const NUMBER_FORMAT_EXAMPLES:NumberFormatExample = {
  '': '',
  'comma-period': '1,400.82',
  'period-comma': '1.400,82',
  'space-comma': '1 400,82',
}
export const NUMBER_FORMATS:NumberFormatDef = {
  'comma-period': {
    group: ',',
    group_regex: /,/g,
    decimal: '.',
    decimal_regex: /\./g,
  },
  'period-comma': {
    group: '.',
    group_regex: /\./g,
    decimal: ',',
    decimal_regex: /,/g,
  },
  'space-comma': {
    group: ' ',
    group_regex: /[ ]/g,
    decimal: ',',
    decimal_regex: /,/g,
  }
}