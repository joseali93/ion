import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputBase } from "../../providers/types-inputs/inputs";


/**
 * Generated class for the InputDinamicoComponent component.
 *
 * NOS PERMITE DEFINIR EL COMPORTAMIENTO QUE TENDRA
 * DEPENDIENDO DEL INPUT QUE SE INGRESE
 */
@Component({
  selector: 'input-dinamico',
  templateUrl: 'input-dinamico.html'
})
export class InputDinamicoComponent {

  text: string;
  @Input() inputdinamico: InputBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.inputdinamico.key].valid; }


}
