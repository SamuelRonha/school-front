import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ControllerComponent} from "../../pages/school/controller/controller.component";
import {Base} from "../../pages/school/model/base/base";

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent extends ControllerComponent implements OnInit {

  @Input() title: string;
  @Input() labels: string[];
  @Input() items: {};
  @Input() titles: Array<string>;
  @Input() table: Array<number>;
  @Input() required: Array<number>;
  @Input() pojo: Base;
  @Input() name: string;

  @Input() child: Array<number>;
  @ViewChild('form')
  private ngForm: NgForm;

  titens: Array<string> = [];
  ttitles: Array<string> = [];

  valid = false;


  ngOnInit(): void {
    for (let i in this.table) {
      this.titens.push(this.items[i]);
      this.ttitles.push(this.titles[i]);
    }
  }

  put() {

    console.log(this.pojo);
    if (this.ngForm.form.invalid) {
      // put() {
      console.log(this.pojo);
      // }
    } else {
      return null;
      // console.log('uhull');
    }

  }

}
