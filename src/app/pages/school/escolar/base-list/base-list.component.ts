import {Component, DoCheck, Input, IterableDiffers, OnInit, ViewChild} from '@angular/core';
import {SmartTablesService} from "../../../tables/components/smartTables/smartTables.service";
import {Http} from "@angular/http";
import {GenericService} from "../../service/generic.service";
import {CustomServerDataSource} from "../../service/serve.data-source";
import {Base} from "../../model/base/base";
import {CustomAulaComponent} from "../turma/hora-aula/custom.aula.component";
import {CustomBimComponent} from "../turma/hora-aula/custom.bim.component";

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.scss']
})

export class BaseListComponent implements DoCheck, OnInit {
  settings: {};
  @Input() ad: string = "";

  ngOnInit(): void {

    // this.settings['columns'] = Object.assign({}, this.typeColumns());

    console.log(this.name);
    this.settings = {
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
      selectMode: 'multi',
      pager: {
        display: true,
      },
      columns: this.typeColumns()
    };

    this.source = new CustomServerDataSource(this.http, this.genericService, this.name, {
      endPoint: 'http://localhost:8080/' + this.name + '/find' + this.ad,
      dataKey: 'content',
      pagerPageKey: 'page',
      totalKey: 'totalElements',
      sortDirKey: 'sort',
      pagerLimitKey: 'size',
      filterFieldKey: '#field#'
    });

    this.source.onChanged().subscribe((e) => {
      this.source.getElements().then((a) => {
        // this.source.load(a);

        this.tabel.grid.dataSet.rows.forEach((row, index) => {
          this.bases.forEach((base) => {
            if (base.id === row.data.id && this.tabel.grid.dataSet.rows[index]) {
              this.tabel.grid.dataSet.rows[index].isSelected = true;
            }
          });

        });
      });
    });
  }

  @Input() bases: Array<Base>;


  source: CustomServerDataSource;
  differ: any;

  @ViewChild('tabela') tabel;

  @Input() name: string = 'base';


  constructor(public http: Http, protected service: SmartTablesService, private differs: IterableDiffers, public genericService: GenericService) {


    this.differ = differs.find([]).create(null);


  }

  @Input() type: string;

  typeColumns(): object {
    switch (this.type) {
      case 'aluno':
        return {
          id: {
            title: 'Identificador',
            type: 'number',
            filter: false,
            editable: false
          },
          nome: {
            title: 'Nome',
            type: 'string',
            filter: true
          },
          numero: {
            title: 'numero',
            type: 'string'
          }
        };
      case 'materia':
        return {
          id: {
            title: 'Identificador',
            type: 'number',
            filter: false,
            editable: false,
          }, nome: {
            title: 'Nome',
            type: 'string'
          }, descricao: {
            title: 'Descrição',
            type: 'string',
            filter: false
          }, observacao: {
            title: 'Observação',
            type: 'string',
            filter: false
          }
        };
      case 'formacaos':
        return {
          id: {
            title: 'Identificador',
            type: 'number',
            filter: false,
            editable: false
          },
          instituicao: {
            title: 'Instituição',
            type: 'string'
          },
          nivel: {
            title: 'Nível',
            type: 'string',
            filter: false
          },
          descricao: {
            title: 'Descrição',
            type: 'string',
            filter: false
          }
        };
      case 'notas':
        return {
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
            title: 'Tipo',
            type: 'html',
            editor: {
              type: 'list',
              config: {
                list: [
                  {value: 'Trabalho', title: 'Trabalho'},
                  {value: 'Prova', title: 'Prova'},
                  {value: 'Extra', title: 'Extra'}
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
        };
    }
  }

  @Input() titulo: string;

  ngDoCheck() {

    // this.source.getElements().then(
    //   (a) => {
    //     const changes = this.differ.diff(a);
    //     if (changes && !(this.source.count() <= 0)) {
    //       console.log('pokemon');
    //     }
    //   });
    // if (this.source.getElements()) {
    //
    // }

    //   if (this.bases && this.source.count() <= 0) {
    //     this.bases.forEach((item, index) => {
    //       item = Object.assign(new Base(), item);
    //       this.bases[index] = item;
    //       this.source.add({base: this.bases[index]});
    //     });
    //   } else if (!this.bases) {
    //     this.source.empty();
    //   }
    //   this.source.refresh();
    // }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Deseja remover esta' + this.name + '?')) {
      this.genericService.delete(this.name, event.data.id).then(op => {
          this.source.refresh();
          this.bases.forEach((item, index) => {
            if (item == event.data.base) {
              this.bases.splice(index, 1);
              return true;
            }
          });
          event.confirm.resolve();
        }
      ).catch(event.confirm.reject());
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    this.source.save(event.newData).then(obj => {
      event.confirm.resolve(event.newData);
    }).catch((a) => {
      alert('Falha ao salvar ' + this.name)
      event.confirm.reject();
    });
  }

  onRowUrSelect(event): void {
    if (event.isSelected) {
      if (this.bases.length <= 0) {
        this.bases.push(event.data);
      } else {
        this.bases.forEach((item, index) => {
          if (item.id !== event.data.id) {
            this.bases.push(event.data);
            return true;
          }
        });
      }
    } else {
      this.bases.forEach((item, index) => {
        if (item.id === event.data.id) {
          this.bases.splice(index, 1);
          return true;
        }
      });
    }
  }

}
