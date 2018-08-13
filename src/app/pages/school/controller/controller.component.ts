import {Component, OnChanges, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GenericService} from "../service/generic.service";
import {Base} from "../model/base/base";

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnChanges, OnInit {
  ngOnChanges() {
  }

  constructor(public genericService: GenericService, private router: Router) {
  }

  name: string = ""
  base: Base;
  obj: string = "";


  ngOnInit(): void {
  }

  close(name) {
    $('#' + name).modal('hide');
  }


}
