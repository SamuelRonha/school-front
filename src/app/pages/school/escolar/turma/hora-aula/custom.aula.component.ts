import {Component, ViewChild, ElementRef, AfterViewInit, Input} from '@angular/core';
import {DefaultEditor} from "ng2-smart-table";
import {Aula} from "../../../model/estudo/aula";
import {CustomComboComponent} from "../../../../../components/custom-combo/custom-combo.component";


@Component({
  templateUrl: './custom.aula.component.html',
})
export class CustomAulaComponent extends DefaultEditor implements AfterViewInit {

  @Input() base: Aula = new Aula();
  @Input() nome: String = "aula";


  @ViewChild('name') name: ElementRef;
  @ViewChild('completerGrid') url: CustomComboComponent;
  @ViewChild('htmlValue') htmlValue: ElementRef;

  constructor() {
    super();
  }


  ngAfterViewInit() {
    console.log(this.url);
    if (this.cell.newValue !== '') {
      this.base = this.cell.getValue();
      this.url.base = this.base;
    }
    this.cell.setValue(this.base);
  }
}
