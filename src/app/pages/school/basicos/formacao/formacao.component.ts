import {Component, OnInit} from '@angular/core';
import {Formacao} from "../../model/basicos/formacao";
import {ControllerComponent} from "../../controller/controller.component";

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.scss']
})
export class FormacaoComponent extends ControllerComponent {
  formacao = new Formacao();
}
