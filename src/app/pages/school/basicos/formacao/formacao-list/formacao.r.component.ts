import {Component, ViewChild, ElementRef, AfterViewInit, Input} from '@angular/core';
import {DefaultEditor} from "ng2-smart-table";
import {Formacao} from "../../../model/basicos/formacao";
import {CustomComboComponent} from "../../../../../components/custom-combo/custom-combo.component";


@Component({
  templateUrl: './formacao.r.component.html',
})
export class FormacaoRComponent extends DefaultEditor implements AfterViewInit {

  base: Formacao = new Formacao();


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

  updateValue() {
    console.log('drone')
    // const href = this.url.nativeElement.value;
    // const name = this.name.nativeElement.value;
    this.cell.newValue = this.base;
  }

  writeValue() {
    console.log('open')
  }

  commitValue() {
    console.log('asd')
  }

  getUrlName(): string {
    console.log('getURL');
    return 'getURL';
    // return this.htmlValue.nativeElement.innerText;
  }

  getUrlHref(): string {
    console.log('getHREF');
    return 'getHREF';
    // return this.htmlValue.nativeElement.querySelector('a').getAttribute('href');
  }
}
