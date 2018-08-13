import {Component, Input, OnInit} from '@angular/core';
import {Form} from "./form";

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {

  @Input() forms: Array<Form>;

  constructor() {
  }

  ngOnInit() {
  }

}
