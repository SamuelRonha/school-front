import {Component, DoCheck, Input, IterableDiffers, OnInit} from '@angular/core';
import {List} from "lodash";
import {Base} from "../../model/base/base";
import {SmartTablesService} from "../../../tables/components/smartTables/smartTables.service";
import {LocalDataSource} from "ng2-smart-table";
import {CustomRComponent} from "../../pessoa/endereco/custom.r.component";

@Component({
  selector: 'app-custom-smart-table',
  templateUrl: './custom-smart-table.component.html',
  styleUrls: ['./custom-smart-table.component.scss']
})
export class CustomSmartTableComponent implements DoCheck {

  @Input() title: string;
  @Input() columns: Object;
  @Input() tipo: string;
  @Input() editor: string;
  @Input() nome: string;


  @Input() l: string;

  settings: any;

  @Input() bases: Array<Base>;

  source: LocalDataSource = new LocalDataSource();
  differ: any;

  constructor(protected service: SmartTablesService, private differs: IterableDiffers) {
    this.source = new LocalDataSource();
    this.differ = differs.find([]).create(null);

    var columns = this.columns;

    this.settings = {
      noDataMessage: "nenhum " + this.title + " registrado...",
      add: {
        addButtonContent: '<i class="ion-ios-plus-outline"></i>',
        createButtonContent: '<i class="ion-checkmark"></i>',
        cancelButtonContent: '<i class="ion-close"></i>',
        confirmCreate: true
      },
      edit: {
        editButtonContent: '<i class="ion-edit"></i>',
        saveButtonContent: '<i class="ion-checkmark"></i>',
        cancelButtonContent: '<i class="ion-close"></i>',
        confirmSave: true
      },
      delete: {
        deleteButtonContent: '<i class="ion-trash-a"></i>',
        confirmDelete: true
      },
      columns: {
        columns
      }
    };

  }

  @Input() insider: string;
  @Input() insiderClass: any;
  @Input() thisClass: any;

  ngDoCheck() {
    const changes = this.differ.diff(this.bases);
    if (changes) {
      if (this.bases && this.source.count() <= 0) {
        this.bases.forEach((item, index) => {
          item = Object.assign(this.thisClass, item);
          if (this.insider) {
            item[this.insider] = Object.assign(this.insiderClass, item[this.insider]);
          }
          this.bases[index] = item;
          this.source.add(item);
        });
      } else if (!this.bases) {
        this.source.empty();
      }
      this.source.refresh();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Deseja remover este endereço?')) {
      this.bases.forEach((item, index) => {
        if (item == event.data) {
          this.bases.splice(index, 1);
        }
      });
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    if (this.isValid(event.newData)) {
      //todo if is valid!!
      console.log(event.source)
      this.bases.push(event.newData);//todo solution to this "solution"
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }


  }

  onEditConfirm(event): void {

    this.bases.forEach((item, index) => {
      if (item == event.data) {
        item = event.newData;
      }
    });
    event.confirm.resolve(event.newData);
  }

  isValid(data): boolean {
    for (var i in data) {
      if (!data[i] && i != 'id') {
        return false;
      }
    }
    return true;//validar com alert

  }

}
