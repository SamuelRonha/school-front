import {Component, OnInit} from '@angular/core';
import {ControllerComponent} from "../../controller/controller.component";
import {Funcao} from "../../model/basicos/funcao";

@Component({
  selector: 'app-funcao',
  templateUrl: './funcao.component.html',
  styleUrls: ['./funcao.component.scss']
})
export class FuncaoComponent extends ControllerComponent implements OnInit {
  funcao: Funcao = new Funcao();

  ngOnInit() {
  }

}
