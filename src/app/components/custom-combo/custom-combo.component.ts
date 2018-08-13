import {Component, Input, ViewChild} from '@angular/core';
import {CompleterService, RemoteData} from "ng2-completer";
import {Base} from "../../pages/school/model/base/base";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {isNullOrUndefined} from "util";


@Component({
  selector: 'app-custom-combo',
  templateUrl: './custom-combo.component.html',
  styleUrls: ['./custom-combo.component.css']
})
export class CustomComboComponent {

  dataRemote2: RemoteData;

  @Input() base: Base;
  @Input() cnome: string;
  @Input() nome = "";
  @Input() searchField = "nome";
  @Input() inome = "";
  @Input() grid = false;
  @Input() hasAdd: true;
  @Input() classInput: string;
  @Input() more: string = '';

  selected($event): void {

    if ($event && $event.originalObject) {
      if (this.base + "" == '' || isNullOrUndefined(this.base)) {
        this.base = new Base();
      }
      if (!this.hasAdd) {
        console.log($event.originalObject)

        for (var i in $event.originalObject) {
          if ($event.originalObject && $event.originalObject[i] && $event.originalObject[i] != '') {
            console.log($event.originalObject[i], 'ásdsad');
            console.log(this.base[i], 'dfdfd');

            this.base[i] = $event.originalObject[i];
          }

        }
      } else {
        this.base['id'] = $event.originalObject['id'];
        this.base["nome"] = $event.originalObject["nome"];
        console.log('aqui');
      }
      console.log(this.base);
    }
  }

  constructor(public completerService: CompleterService, private modal: NgbActiveModal) {
    this.dataRemote2 = completerService.remote(
      null,
      this.searchField,
      "nome");
    this.dataRemote2.urlFormater(term => {
      return `http://localhost:8080/${this.inome}/find?${this.searchField}=${this.nome + this.more}`;
    });
    console.log(this.searchField);
    this.dataRemote2.dataField("content");
  }


  @Input() prop = 'nome';

  blur() {
    if (!this.hasAdd) {
      console.log('asai');

      var inputValue = (<HTMLInputElement>$('#' + this.cnome + 'completerCombo')[0]).value;
      this.base[this.prop] = inputValue;
    }


    // this.nome = this.completerCombo.nativeElement.value;
  }
}
