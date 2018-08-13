import {Component, OnInit} from '@angular/core';
import {Turma} from "../../model/estudo/turma";

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss']
})
export class TurmaComponent implements OnInit {
  //todo lista de alunos -> smart table

  turma: Turma = new Turma();

  constructor() {
  }

  ngOnInit() {
    // $(".id-ano").prop('disabled', true);
    // $(".id-ano").change(function () {
    //   $(".id-ano").prop('disabled', false);
    // });
  }

}
