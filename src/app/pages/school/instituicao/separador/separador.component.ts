import {Component, DoCheck, Input, IterableDiffers, OnInit} from '@angular/core';
import {Separador} from "../../model/estudo/separador";
import {LocalDataSource} from "ng2-smart-table";
import {SmartTablesService} from "../../../tables/components/smartTables/smartTables.service";
import {CustomDateComponent} from "../ano-letivo/custom.date.component";

@Component({
  selector: 'app-separador',
  templateUrl: './separador.component.html',
  styleUrls: ['./separador.component.scss']
})
export class SeparadorComponent implements DoCheck {

  @Input() separadors: Array<Separador>;

  settings = {
    noDataMessage: "nenhum separador registrado...",
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
      nome: {
        title: 'Nome',
        type: 'string',
        editor: {
          type: 'date',
        }
      },
      dataInicio: {
        title: 'Inicio',
        type: 'html',
        editor: {
          type: 'custom',
          component: CustomDateComponent,
        },
        noDataMessage: '07/05/2018...',
      },
      dataFim: {
        title: 'Fim',
        type: 'html',
        editor: {
          type: 'custom',
          component: CustomDateComponent,
        },
        noDataMessage: '07/07/2018...',
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
    const changes = this.differ.diff(this.separadors);
    if (changes) {
      if (this.separadors && this.source.count() <= 0) {
        this.separadors.forEach((item, index) => {
          item = Object.assign(new Separador(), item);
          this.separadors[index] = item;
          this.source.add(item);
        });
      } else if (!this.separadors) {
        this.source.empty();
      }
      this.source.refresh();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Deseja remover este separador?')) {
      this.separadors.forEach((item, index) => {
        if (item == event.data) {
          this.separadors.splice(index, 1);
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
      this.separadors.push(event.newData);//todo solution to this "solution"
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }


  }

  onEditConfirm(event): void {

    this.separadors.forEach((item, index) => {
      if (item == event.data) {
        item = event.newData;
      }
    });
    event.confirm.resolve(event.newData);
  }

  isValid(data): boolean {
    // for (var i in data) {
    //   if (!data[i] && i != 'id') {
    //     return false;
    //   }
    // }
    return true;//validar com alert
  }
}
