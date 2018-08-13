import {Component, ViewChild, ElementRef, AfterViewInit, Input} from '@angular/core';
import {DefaultEditor} from "ng2-smart-table";
import {Base} from "../../model/base/base";
import {Cidade} from "../../model/localidades/cidade";
import {CustomComboComponent} from "../../../../components/custom-combo/custom-combo.component";


@Component({
  templateUrl: './custom.date.component.html',
})
export class CustomDateComponent extends DefaultEditor implements AfterViewInit {


  @ViewChild('data') url;

  constructor() {
    super();
  }


  ngAfterViewInit() {
    console.log(this.url);
    if (this.cell.newValue !== '') {
    }
    this.url.nativeElement.value = this.cell.getValue();
  }

  updateValue(val) {
    this.cell.setValue((this.url.nativeElement.value));
  }
}
