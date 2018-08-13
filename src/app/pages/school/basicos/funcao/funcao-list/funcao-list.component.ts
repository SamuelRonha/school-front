import {Component, DoCheck, Input, IterableDiffers, OnInit} from '@angular/core';
import {Funcao} from "../../../model/basicos/funcao";
import {FuncaoRComponent} from "./funcao.r.component";
import {LocalDataSource} from "ng2-smart-table";
import {SmartTablesService} from "../../../../tables/components/smartTables/smartTables.service";

@Component({
  selector: 'app-funcao-list',
  templateUrl: './funcao-list.component.html',
  styleUrls: ['./funcao-list.component.scss']
})
export class FuncaoListComponent implements DoCheck {

  @Input() funcaos: Array<Funcao>;

  settings = {
    noDataMessage: "nenhuma função registrada...",
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
      funcao: {
        title: 'Função',
        type: 'html',
        editor: {
          type: 'custom',
          component: FuncaoRComponent,
        },
        noDataMessage: 'Selecione uma função...',
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();
  differ: any;

  constructor(protected service: SmartTablesService, private differs: IterableDiffers) {
    this.source = new LocalDataSource();
    this.differ = differs.find([]).create(null);

  }


  ngDoCheck() {
    const changes = this.differ.diff(this.funcaos);
    if (changes) {
      if (this.funcaos && this.source.count() <= 0) {
        this.funcaos.forEach((item, index) => {
          item = Object.assign(new Funcao(), item);
          this.funcaos[index] = item;
          this.source.add({funcao: this.funcaos[index]});
        });
      } else if (!this.funcaos) {
        this.source.empty();
      }
      this.source.refresh();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Deseja remover esta matéria?')) {
      this.funcaos.forEach((item, index) => {
        if (item == event.data.funcao) {
          this.funcaos.splice(index, 1);
        }
      });
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    if (this.isValid(event.newData.funcao)) {
      //todo if is valid!!
      this.funcaos.push(event.newData.funcao);//todo solution to this "solution"
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }


  }

  onEditConfirm(event): void {

    this.funcaos.forEach((item, index) => {
      if (item == event.data.funcao) {
        item = event.newData;
      }
    });
    event.confirm.resolve(event.newData);
  }

  isValid(data): boolean {
    return (data && data.id)
  }

}
