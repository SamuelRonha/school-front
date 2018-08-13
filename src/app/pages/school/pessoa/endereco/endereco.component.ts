import {Component, DoCheck, Input, IterableDiffers, OnInit} from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";
import {SmartTablesService} from "../../../tables/components/smartTables/smartTables.service";
import {Endereco} from "../../model/localidades/endereco";
import {ComboCidadeComponent} from "../../locations/cidade/combo-cidade/combo-cidade.component";
import {CustomRComponent} from "./custom.r.component";
import {ControllerComponent} from "../../controller/controller.component";
import {Cidade} from "../../model/localidades/cidade";
import {validate} from "codelyzer/walkerFactory/walkerFn";

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
//todo on update item
export class EnderecoComponent implements DoCheck {

  @Input() enderecos: Array<Endereco>;

  settings = {
    noDataMessage: "nenhum endereço registrado...",
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
      cidade: {
        title: 'Cidade',
        type: 'html',
        editor: {
          type: 'custom',
          component: CustomRComponent,
        },
        noDataMessage: 'Selecione uma cidade...',
      },
      tipo: {
        title: 'Tipo',
        type: 'string',
        isEditable: false,
        attr: {
          class: 'teste'
        }
      },
      rua: {
        title: 'Rua',
        type: 'string'
      },
      numero: {
        title: 'Número',
        type: 'string'
      },
      bairro: {
        title: 'Bairro',
        type: 'string',
        // valuePrepareFunction: function (cell, row) {
        //   console.log(cell);
        //   console.log(row);
        //   return cell;
        // }
      },
      complemento: {
        title: 'Complemento',
        type: 'string'
      },
      cep: {
        title: 'Cep',
        editor: {
          type: 'string',
        }
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
    const changes = this.differ.diff(this.enderecos);
    if (changes) {
      if (this.enderecos && this.source.count() <= 0) {
        this.enderecos.forEach((item, index) => {
          item = Object.assign(new Endereco(), item);
          item.cidade = Object.assign(new Cidade(), item.cidade);
          this.enderecos[index] = item;
          this.source.add(item);
        });
      } else if (!this.enderecos) {
        this.source.empty();
      }
      this.source.refresh();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Deseja remover este endereço?')) {
      this.enderecos.forEach((item, index) => {
        if (item == event.data) {
          this.enderecos.splice(index, 1);
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
      this.enderecos.push(event.newData);//todo solution to this "solution"
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }


  }

  onEditConfirm(event): void {

    this.enderecos.forEach((item, index) => {
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
