import {Component, OnInit} from '@angular/core';
import {Aluno} from "../../model/pessoas/aluno";

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {
  aluno: Aluno = new Aluno();

  constructor() {
  }

  ngOnInit() {
  }

}
