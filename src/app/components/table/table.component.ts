import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Base} from "../../pages/school/model/base/base";
import {Page} from "../../pages/school/model/base/page";
import {Model} from "../../pages/school/model/base/model";
import {GenericService} from "../../pages/school/service/generic.service";
import {ControllerComponent} from "../../pages/school/controller/controller.component";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent extends ControllerComponent implements OnChanges, OnInit {

  ngOnInit(): void {
    this.getItems();
  }

  @Input() name: string;
  @Input() titles: string;
  @Input() columns: string[];
  @Input() pojo: Base;


  page: Page;
  public item: Model[];
  pages: number[] = [];

  names: Array<Object>;
  prop: {};

  pagen = 0;

  search = "";

  @ViewChild('pagesComponent') pagesComponent;
  @ViewChild('headerComponent') headerComponent;

  errors = [];

  paginar(page: number) {


    if (this.pagesComponent.nativeElement.children.length > 2) {
      for (var i = 0; i < this.pagesComponent.nativeElement.children.length; i++) {
        this.pagesComponent.nativeElement.children[i].classList.remove('active');
      }
      if (this.pagesComponent.nativeElement.children[(page + 1)]) {
        this.pagesComponent.nativeElement.children[(page + 1)].classList.add('active');
      }
    }
  }

  handleBack() {
    if (this.pagen == 0) {
      this.pagen = this.pagesComponent.nativeElement.children.length - 3;
    } else
      this.pagen = this.pagen - 1;
    this.getItems(this.pagen);
  }

  handleForward() {
    console.log(this.pagesComponent.nativeElement.children.length);
    if (this.pagen >= this.pagesComponent.nativeElement.children.length - 3) {
      this.pagen = 0;
    } else
      this.pagen = this.pagen + 1;
    this.getItems(this.pagen);
  }

  getItems(pagen: number = 0): void {
    this.pagen = pagen;
    this.paginar(pagen);

    this.genericService.getItems(this.name, this.search, pagen).then(page => {
      this.page = page;
      this.pages = [];
      this.item = page.content;

      for (let i = 0; i < page.totalPages; i++) {
        this.pages.push(i + 1);

      }

      this.names = new Array<Object>();
      for (let arrayItem of this.item) {
        this.prop = {};
        var nome = "";
        for (let col of this.columns) {
          nome = arrayItem[col];
          if (col.split(".").length > 1) {
            nome = arrayItem[col.split(".")[0]];
            for (let inside of col.split('.')) {
              nome = (nome[inside] ? nome[inside] : nome);
            }
          }
          this.prop[col] = nome;
          // this.names.push({col: nome})
        }
        this.names.push(this.prop);
      }
      console.log(this.names);
    })
  }

  ngOnChanges() {
  }

  consulta(item: Base, pojo?) {
    if (!pojo) {
      pojo = this.pojo;
    }
    console.log(item);
    for (var i in item) {
      if (pojo[i] instanceof Base) {
        console.log(i + "pokemon");
        this.consulta(item[i], pojo[i]);
      } else {
        console.log(i + "no pokemon");
        pojo[i] = item[i];
      }// console.log(this.pojo[i]);
    }
    this.pojo = pojo;
  }

  save(name: string, base: Base): string {
    this.base = base;
    this.name = name;

    console.log(this.base);
    this.genericService.save(this.name, this.base).then(obj => {
      this.obj = obj + "";//TODO: obj should be a error or success class
      if (this.obj["errors"]) {
      }
      this.getItems()

    }).catch(obj => {
      let inputField: HTMLElement;
      for (var i in obj) {
        inputField = <HTMLElement>document.querySelectorAll(`[id^=${obj[i].propriedade}]`)[0];
        break;
      }
      if (this.obj["errors"]) {
        this.errors = obj;
      }
      console.log(obj);

      $('#error-modal').modal('show');
      $('#error-modal').on('hidden.bs.modal', function (e) {
        inputField.focus();
      });
    });
    // callback();
    return this.obj;
  }

  excluir(item: Base) {
    this.genericService.delete(this.name, item['id']).then(op =>
      this.getItems()
    );
  }

  clear(pojo: Base) {
    for (var i in pojo) {
      if (pojo[i] instanceof Base || ((pojo[i]) && pojo[i].id)) {
        // console.log(pojo[i])
        this.clear(pojo[i])
      } else {
        // console.log(pojo[i]);
        pojo[i] = null
      }
    }
  }

  sort(t) {
    if (this.headerComponent.nativeElement.children[t].classList.contains('ion-ios-arrow-up')) {
      this.search = this.search.replace(`&sort=${this.columns[t]},asc`, `&sort=${this.columns[t]},desc`)
      this.headerComponent.nativeElement.children[t].classList.remove('ion-ios-arrow-up');
      this.headerComponent.nativeElement.children[t].classList.add('ion-ios-arrow-down');
    } else if (this.headerComponent.nativeElement.children[t].classList.contains('ion-ios-arrow-down')) {
      this.search = this.search.replace(`&sort=${this.columns[t]},desc`, '');
      this.headerComponent.nativeElement.children[t].classList.remove('ion-ios-arrow-down');
    } else {
      this.search += `&sort=${this.columns[t]},asc`
      this.headerComponent.nativeElement.children[t].classList.add('ion-ios-arrow-up');
      this.headerComponent.nativeElement.children[t].classList.remove('ion-ios-arrow-down');
    }
    // this.search = `?&sort=${this.columns[t]},asc`;
    this.getItems(0);
    console.log(this.search);
  }


}
