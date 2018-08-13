import {Component, ViewChild, ElementRef, AfterViewInit, Input} from '@angular/core';
import {DefaultEditor} from "ng2-smart-table";
import {Base} from "../../model/base/base";
import {Cidade} from "../../model/localidades/cidade";
import {CustomComboComponent} from "../../../../components/custom-combo/custom-combo.component";


@Component({
  templateUrl: './custom.r.component.html',
})
export class CustomRComponent extends DefaultEditor implements AfterViewInit {

  @Input() base: Cidade = new Cidade();
  @Input() nome: String = "nome";


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
