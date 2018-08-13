import {Component, OnInit} from '@angular/core';
import {ControllerComponent} from "../../controller/controller.component";
import {Pais} from "../../model/localidades/pais";

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  pais: Pais = new Pais();

  ngOnInit() {
  }


}
