/*
  INPUT ETN
  E- EMAIL
  T- TEXT
  N- NUMBER
  DEFINIMOS COMO SE COMPORTARA LA ESTRUCTURA DE ESTE TIPO
  DE INPUTS
  Y LOS TIPO SELECT
*/
import { InputBase } from "./inputs";

export class TextboxQuestion extends InputBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}

export class DropdownQuestion extends InputBase<string> {
  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
