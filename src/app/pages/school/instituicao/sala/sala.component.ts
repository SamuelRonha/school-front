import {Component, OnInit} from '@angular/core';
import {Sala} from "../../model/localidades/sala";
import {ControllerComponent} from "../../controller/controller.component";

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.scss']
})
export class SalaComponent extends ControllerComponent implements OnInit {

  sala: Sala = new Sala();


  ngOnInit() {
  }

}
