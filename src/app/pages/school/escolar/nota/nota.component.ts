import {Component, DoCheck, Input, IterableDiffers, OnInit} from '@angular/core';
import {Nota} from "../../model/estudo/nota";
import {Alunonota} from "../../model/estudo/alunonota";
import {CustomAulaComponent} from "../turma/hora-aula/custom.aula.component";
import {CustomBimComponent} from "../turma/hora-aula/custom.bim.component";
import {LocalDataSource} from "ng2-smart-table";
import {SmartTablesService} from "../../../tables/components/smartTables/smartTables.service";
import {Aula} from "../../model/estudo/aula";
import {Separador} from "../../model/estudo/separador";

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.scss']
})
export class NotaComponent implements DoCheck {

  alunoNota: Alunonota = new Alunonota();

  settings = {
    noDataMessage: "nenhuma registrada...",
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
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
        width: '0px'
      },
      aula: {
        title: 'Aula',
        type: 'html',
        editor: {
          type: 'custom',
          component: CustomAulaComponent,
        },
        noDataMessage: 'Selecione uma aula...',
      },
      tipo: {
        title: 'Tipo',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [
              {value: 'Trabalho', title: 'Trabalho'},
              {value: 'Avaliação', title: 'Avaliação'},
              {value: 'Recuperação', title: 'Recuperação'},
              {value: 'Outra', title: 'Outra'},
            ]
          }
        }
      },
      separador: {
        title: 'Separador',
        type: 'html',
        editor: {
          type: 'custom',
          component: CustomBimComponent,
        },
        noDataMessage: 'Selecione uma separador...',
      },
      valor: {
        title: 'Valor',
        type: 'number',
      },
    }
  };

  source: LocalDataSource = new LocalDataSource();
  differ: any;

  constructor(protected service: SmartTablesService, private differs: IterableDiffers) {
    this.source = new LocalDataSource();
    this.differ = differs.find([]).create(null);
  }

  ngDoCheck() {
    const changes = this.differ.diff(this.alunoNota.notas);
    if (changes) {
      if (this.alunoNota.notas && this.source.count() <= 0) {
        this.alunoNota.notas.forEach((item, index) => {
          item = Object.assign(new Nota(), item);
          item.aula = Object.assign(new Aula(), item.aula);
          item.separador = Object.assign(new Separador(), item.separador);
          this.alunoNota.notas[index] = item;
          this.source.add(item);
        });
      } else if (!this.alunoNota.notas) {
        this.source.empty();
      }
      this.source.refresh();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Deseja remover este endereço?')) {
      this.alunoNota.notas.forEach((item, index) => {
        if (item == event.data) {
          this.alunoNota.notas.splice(index, 1);
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
      this.alunoNota.notas.push(event.newData);//todo solution to this "solution"
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }


  onEditConfirm(event): void {

    this.alunoNota.notas.forEach((item, index) => {
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
