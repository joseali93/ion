import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';


import { InputBase } from "../../providers/types-inputs/inputs";
import { QuestionControlService } from "../../service/inputservicebase";
/**
 * Generated class for the FormDynamicComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form-dynamic',
  templateUrl: 'form-dynamic.html',
  providers: [ QuestionControlService ]
})
export class FormDynamicComponent implements OnInit {
  @Input() inputdinamico: InputBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {
    console.log('Hello FormDynamicComponent Component');
    
  }
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.inputdinamico);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
