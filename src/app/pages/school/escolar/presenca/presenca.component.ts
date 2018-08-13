import {Component, OnInit} from '@angular/core';
import {Presenca} from "../../model/estudo/presenca";

@Component({
  selector: 'app-presenca',
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.scss']
})
export class PresencaComponent implements OnInit {

  tid: string = "/0";
  presenca: Presenca = new Presenca();

  constructor() {
  }

  ngOnInit() {
    $(".TurmacompleterCombo").change(function () {
      if ($(".turma").val() != '') {
        this.tid = "/" + $(".turma").val();
      }
    });
  }

}
