import {Component, Input, OnInit} from '@angular/core';
import {Funcionario} from "../../model/pessoas/funcionario";
import {ControllerComponent} from "../../controller/controller.component";

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent extends ControllerComponent implements OnInit {

  @Input() funcionario: Funcionario = new Funcionario();
  @Input() tabela: boolean = true;

  ngOnInit() {
  }

}
