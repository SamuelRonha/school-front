import { Component, OnInit } from '@angular/core';
import {Materia} from "../../model/estudo/materia";

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.scss']
})
export class MateriaComponent implements OnInit {
  materia: Materia = new Materia();
  constructor() { }

  ngOnInit() {
  }

}
