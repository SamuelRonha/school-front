import {Component, OnInit} from '@angular/core';
import {ControllerComponent} from "../../controller/controller.component";
import {Estado} from "../../model/localidades/estado";
import {CompleterData, CompleterService, RemoteData} from "ng2-completer";
import {GenericService} from "../../service/generic.service";
import {Page} from "../../model/base/page";
import {Observable} from "rxjs/Observable";
import {PaisComponent} from "../pais/pais.component";

declare const jquery: any;
declare const $: any;

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent extends ControllerComponent {

  estado: Estado = new Estado();
}
