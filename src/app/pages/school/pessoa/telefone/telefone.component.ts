import {Component, DoCheck, Input, IterableDiffers, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Telefone} from "../../model/localidades/telefone";
import {LocalDataSource} from "ng2-smart-table";
import {SmartTablesService} from "../../../tables/components/smartTables/smartTables.service";

@Component({
  selector: 'app-telefone',
  templateUrl: './telefone.component.html',
  styleUrls: ['./telefone.component.scss']
})
export class TelefoneComponent {


  @Input() telefones: Array<Telefone> = new Array();

  query: string = '';

  settings = {
    noDataMessage: "nenhum telefone registrado...",
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
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false
      },
      tipo: {
        title: 'Tipo',
        type: 'string'
      },
      numero: {
        title: 'Numero',
        type: 'string'
      }
    }
  };

  columns = {
    id: {
      title: 'ID',
      type: 'number',
      editable: false
    },
    tipo: {
      title: 'Tipo',
      type: 'string'
    },
    numero: {
      title: 'Numero',
      type: 'string'
    }
  };


  public source: LocalDataSource;
  private differ: any;

  constructor(protected service: SmartTablesService, private differs: IterableDiffers) {
    this.source = new LocalDataSource();
    this.differ = differs.find([]).create(null);
  }


  ngDoCheck() {
    const changes = this.differ.diff(this.telefones);
    if (changes) {
      if (this.telefones && this.source.count() <= 0) {
        this.telefones.forEach((item, index) => {
          item = Object.assign(new Telefone(), item);
          this.telefones[index] = item;
          this.source.add(this.telefones[index]);
        });
      } else if (!this.telefones) {
        this.source.empty();
      }
      this.source.refresh();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Deseja remover esta matéria?')) {
      this.telefones.forEach((item, index) => {
        if (item == event.data) {
          this.telefones.splice(index, 1);
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
      this.telefones.push(event.newData);//todo solution to this "solution"
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }


  }

  onEditConfirm(event): void {

    this.telefones.forEach((item, index) => {
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
