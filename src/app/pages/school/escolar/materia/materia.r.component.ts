import {Component, ViewChild, ElementRef, AfterViewInit, Input} from '@angular/core';
import {DefaultEditor} from "ng2-smart-table";
import {Base} from "../../model/base/base";
import {Cidade} from "../../model/localidades/cidade";
import {CustomComboComponent} from "../../../../components/custom-combo/custom-combo.component";
import {Materia} from "../../model/estudo/materia";


@Component({
  templateUrl: './materia.r.component.html',
})
export class MateriaRComponent extends DefaultEditor implements AfterViewInit {

  base: Materia = new Materia();


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
