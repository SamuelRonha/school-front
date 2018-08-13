import {Component, OnInit, ViewChild} from '@angular/core';
import {ControllerComponent} from "../../controller/controller.component";
import {Anoletivo} from "../../model/estudo/anoletivo";

@Component({
  selector: 'app-ano-letivo',
  templateUrl: './ano-letivo.component.html',
  styleUrls: ['./ano-letivo.component.scss']
})
export class AnoLetivoComponent extends ControllerComponent implements OnInit {

  anoLetivo: Anoletivo = new Anoletivo();

  ngOnInit() {

  }

}
