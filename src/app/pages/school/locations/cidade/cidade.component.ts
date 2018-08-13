import {Component, OnInit} from '@angular/core';
import {Cidade} from "../../model/localidades/cidade";
import {ControllerComponent} from "../../controller/controller.component";

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent extends ControllerComponent implements OnInit {
  cidade: Cidade = new Cidade();

  ngOnInit() {
  }

}
