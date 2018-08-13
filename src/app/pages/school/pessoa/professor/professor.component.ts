import {Component, OnInit} from '@angular/core';
import {ControllerComponent} from "../../controller/controller.component";
import {Professor} from "../../model/pessoas/professor";

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent extends ControllerComponent implements OnInit {
  professor: Professor = new Professor();

  ngOnInit() {
  }

}
