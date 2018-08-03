import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionService } from '../../service/formdinamico';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:  [QuestionService]
})
export class HomePage {
  inputdinamico: any[];

  todo: string;
  constructor(public navCtrl: NavController,
    service: QuestionService) {
    this.todo='josea laii'
    this.inputdinamico = service.getQuestions();
    //console.log(service.getQuestions());

  }


}
