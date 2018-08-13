import {Component, ViewChild, ElementRef, AfterViewInit, Input} from '@angular/core';
import {DefaultEditor} from "ng2-smart-table";


@Component({
  templateUrl: './custom.hora.component.html',
})
export class CustomHoraComponent extends DefaultEditor implements AfterViewInit {


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
