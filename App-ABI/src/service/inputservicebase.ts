import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { InputBase } from "../providers/types-inputs/inputs";

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(inputdinamico: InputBase<any>[] ) {
    let group: any = {};

    inputdinamico.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}