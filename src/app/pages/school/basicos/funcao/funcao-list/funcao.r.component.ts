import {Component, ViewChild, ElementRef, AfterViewInit, Input} from '@angular/core';
import {DefaultEditor} from "ng2-smart-table";
import {Funcao} from "../../../model/basicos/funcao";
import {CustomComboComponent} from "../../../../../components/custom-combo/custom-combo.component";


@Component({
  templateUrl: './funcao.r.component.html',
})
export class FuncaoRComponent extends DefaultEditor implements AfterViewInit {

  base: Funcao = new Funcao();


  @ViewChild('name') name: ElementRef;
  @ViewChild('completerGrid') url: CustomComboComponent;
  @ViewChild('htmlValue') htmlValue: ElementRef;

  constructor() {
    super();
  }
  ngAfterViewInit() {
    console.log(this.cell.newValue);
    if (this.cell.newValue !== '') {
      this.base = this.cell.getValue();
    }
    // console.log(this.base);
    this.cell.setValue(this.base);
  }
}
