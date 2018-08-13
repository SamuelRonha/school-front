import {Component, ViewChild, ElementRef, AfterViewInit, Input, OnInit} from '@angular/core';
import {DefaultEditor} from "ng2-smart-table";
import {Separador} from "../../../model/estudo/separador";
import {CustomComboComponent} from "../../../../../components/custom-combo/custom-combo.component";

@Component({
  templateUrl: './custom.bim.component.html',
})
export class CustomBimComponent extends DefaultEditor implements AfterViewInit, OnInit {
  ngOnInit(): void {
    // console.log($('#id-ano'));
    // if ($('#id-ano')[0] && $('#id-ano')[0] instanceof HTMLInputElement && (<HTMLInputElement>($('#id-ano')[0])).value) {
      // console.log('pau no teu cu!');
      // console.log($('#id-ano').value);
      // this.nome = (<HTMLInputElement>($('#id-ano')[0])).value;
      this.more = '&ano=' + (new Date()).getFullYear();
    // }
  }

  @Input() base: Separador = new Separador();
  nome: String = "nome";
  more: String = "id";


  @ViewChild('name') name: ElementRef;
  @ViewChild('completerGrid') url: CustomComboComponent;
  @ViewChild('htmlValue') htmlValue: ElementRef;

  searchfield = "";

  constructor() {
    super();
  }


  ngAfterViewInit() {
    // console.log(this.url);
    // this.searchfield = 'id';
    // console.log($('#id-ano'));
    // if ($('#id-ano')[0] && $('#id-ano')[0] instanceof HTMLInputElement && (<HTMLInputElement>($('#id-ano')[0])).value) {
      // console.log('pau no teu cu!');
      // console.log($('#id-ano').value);
      // this.nome = (<HTMLInputElement>($('#id-ano')[0])).value;
    // }

    if (this.cell.newValue !== '') {
      this.base = this.cell.getValue();
      this.url.base = this.base;
    }
    this.cell.setValue(this.base);
  }
}
