export enum KEYBOARD_TYPES {
  INTEGER = 'integer',
  RESET = 'reset',
  OPERATION = 'operation',
  DOT = 'dot',
  EQUAL = 'equal',
}

export interface Keyboard {
  type: KEYBOARD_TYPES;
  keyboard: string | number;
  key: string;
  className: string;
}

export interface Expression {
  [x: string]: (x: number, y: number) => number;
}
