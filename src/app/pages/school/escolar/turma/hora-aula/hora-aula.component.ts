import {Component, DoCheck, Input, IterableDiffers, OnInit} from '@angular/core';
import {Horaaula} from "../../../model/estudo/horaaula";
import {CustomAulaComponent} from "./custom.aula.component";
import {LocalDataSource} from "ng2-smart-table";
import {SmartTablesService} from "../../../../tables/components/smartTables/smartTables.service";
import {Aula} from "../../../model/estudo/aula";
import {CustomHoraComponent} from "./custom.hora.component";
import {CustomBimComponent} from "./custom.bim.component";

@Component({
  selector: 'app-hora-aula',
  templateUrl: './hora-aula.component.html',
  styleUrls: ['./hora-aula.component.scss']
})
export class HoraAulaComponent implements DoCheck {

  @Input() horaAulas: Array<Horaaula>;

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
      diaSemana: {
        title: 'Dia',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [
              {value: 1, title: 'Domingo'},
              {value: 2, title: 'Segunda'},
              {value: 3, title: 'Terça'},
              {value: 4, title: 'Quarta'},
              {value: 5, title: 'Quinta'},
              {value: 6, title: 'Sexta'},
              {value: 7, title: 'Sábado'},
            ]
          }
        }
      },
      hora: {
        title: 'Horário',
        type: 'html',
        editor: {
          type: 'custom',
          component: CustomHoraComponent,
        },
        noDataMessage: 'Selecione um horário...',
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
    }
  };

  source: LocalDataSource = new LocalDataSource();
  differ: any;

  constructor(protected service: SmartTablesService, private differs: IterableDiffers) {
    this.source = new LocalDataSource();
    this.differ = differs.find([]).create(null);
  }

  ngDoCheck() {
    const changes = this.differ.diff(this.horaAulas);
    if (changes) {
      if (this.horaAulas && this.source.count() <= 0) {
        this.horaAulas.forEach((item, index) => {
          item = Object.assign(new Horaaula(), item);
          item.aula = Object.assign(new Aula(), item.aula);
          this.horaAulas[index] = item;
          this.source.add(item);
        });
      } else if (!this.horaAulas) {
        this.source.empty();
      }
      this.source.refresh();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Deseja remover este endereço?')) {
      this.horaAulas.forEach((item, index) => {
        if (item == event.data) {
          this.horaAulas.splice(index, 1);
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
      this.horaAulas.push(event.newData);//todo solution to this "solution"
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }


  onEditConfirm(event): void {

    this.horaAulas.forEach((item, index) => {
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
