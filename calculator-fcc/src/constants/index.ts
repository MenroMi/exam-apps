import {Expression, KEYBOARD_TYPES, Keyboard} from '../types';

export const keyboards: Keyboard[] = [
  {
    type: KEYBOARD_TYPES.INTEGER,
    keyboard: 1,
    key: 'one',
    className: 'int-1',
  },
  {
    type: KEYBOARD_TYPES.INTEGER,
    keyboard: 2,
    key: 'two',
    className: 'int-2',
  },
  {
    type: KEYBOARD_TYPES.INTEGER,
    keyboard: 3,
    key: 'three',
    className: 'int-3',
  },
  {
    type: KEYBOARD_TYPES.INTEGER,
    keyboard: 4,
    key: 'four',
    className: 'int-4',
  },
  {
    type: KEYBOARD_TYPES.INTEGER,
    keyboard: 5,
    key: 'five',
    className: 'int-5',
  },
  {
    type: KEYBOARD_TYPES.INTEGER,
    keyboard: 6,
    key: 'six',
    className: 'int-6',
  },
  {
    type: KEYBOARD_TYPES.INTEGER,
    keyboard: 7,
    key: 'seven',
    className: 'int-7',
  },
  {
    type: KEYBOARD_TYPES.INTEGER,
    keyboard: 8,
    key: 'eight',
    className: 'int-8',
  },
  {
    type: KEYBOARD_TYPES.INTEGER,
    keyboard: 9,
    key: 'nine',
    className: 'int-9',
  },
  {
    type: KEYBOARD_TYPES.INTEGER,
    keyboard: 0,
    key: 'zero',
    className: 'int-0',
  },
  {
    type: KEYBOARD_TYPES.RESET,
    keyboard: 'AC',
    key: 'reset',
    className: 'reset',
  },
  {
    type: KEYBOARD_TYPES.EQUAL,
    keyboard: '=',
    key: 'equals',
    className: 'equal',
  },
  {
    type: KEYBOARD_TYPES.OPERATION,
    keyboard: '/',
    key: 'divide',
    className: 'divide',
  },
  {
    type: KEYBOARD_TYPES.OPERATION,
    keyboard: 'x',
    key: 'multiply',
    className: 'multiply',
  },
  {
    type: KEYBOARD_TYPES.OPERATION,
    keyboard: '-',
    key: 'subtract',
    className: 'minus',
  },
  {
    type: KEYBOARD_TYPES.OPERATION,
    keyboard: '+',
    key: 'add',
    className: 'plus',
  },
  {
    type: KEYBOARD_TYPES.DOT,
    keyboard: '.',
    key: 'decimal',
    className: 'dot',
  },
];

export const mathExpressions: Expression = {
  '/': (x: number, y: number): number => x / y,
  '*': (x: number, y: number): number => x * y,
  '-': (x: number, y: number): number => x - y,
  '+': (x: number, y: number): number => x + y,
};

// for knownledge
export const regexpOperands: RegExp = /(\d+(?:\.\d+)?)/g; // /(-?\d+(?:\.\d+)?)/g;
export const regexpOperations: RegExp = /([-+*/])/g;
