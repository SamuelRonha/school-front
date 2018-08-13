import {Component, DoCheck, Input, IterableDiffers, OnInit} from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";
import {Formacao} from "../../../model/basicos/formacao";
import {SmartTablesService} from "../../../../tables/components/smartTables/smartTables.service";
import {FormacaoRComponent} from "./formacao.r.component";

@Component({
  selector: 'app-formacao-list',
  templateUrl: './formacao-list.component.html',
  styleUrls: ['./formacao-list.component.scss']
})
export class FormacaoListComponent implements DoCheck {

  @Input() formacaos: Array<Formacao>;

  settings = {
    noDataMessage: "nenhuma matéria registrada...",
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
      formacao: {
        title: 'Formacao',
        type: 'html',
        editor: {
          type: 'custom',
          component: FormacaoRComponent,
        },
        noDataMessage: 'Selecione uma matéria...',
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
    const changes = this.differ.diff(this.formacaos);
    if (changes) {
      if (this.formacaos && this.source.count() <= 0) {
        this.formacaos.forEach((item, index) => {
          item = Object.assign(new Formacao(), item);
          this.formacaos[index] = item;
          this.source.add({formacao: this.formacaos[index]});
        });
      } else if (!this.formacaos) {
        this.source.empty();
      }
      this.source.refresh();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Deseja remover esta matéria?')) {
      this.formacaos.forEach((item, index) => {
        if (item == event.data.formacao) {
          this.formacaos.splice(index, 1);
        }
      });
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    if (this.isValid(event.newData.formacao)) {
      //todo if is valid!!
      this.formacaos.push(event.newData.formacao);//todo solution to this "solution"
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }


  }

  onEditConfirm(event): void {

    this.formacaos.forEach((item, index) => {
      if (item == event.data.formacao) {
        item = event.newData;
      }
    });
    event.confirm.resolve(event.newData);
  }

  isValid(data): boolean {
    return (data && data.id)
  }

}
