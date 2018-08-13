// import {Component, IterableDiffers, OnChanges, OnInit} from '@angular/core';
// import {Router} from "@angular/router";
// import {GenericService} from "../service/generic.service";
// import {Base} from "../model/base/base";
// import {LocalDataSource} from "ng2-smart-table";
// import {SmartTablesService} from "../../tables/components/smartTables/smartTables.service";
//
// @Component({
//   selector: 'app-controller',
//   templateUrl: './controller.component.html',
//   styleUrls: ['./controller.component.css']
// })
// export class ControllerListComponent implements OnChanges, OnInit {
//   ngOnChanges() {
//   }
//
//   name: string = ""
//   base: Base;
//   obj: string = "";
//   clazz: any;
//
//   ngOnInit(): void {
//   }
//
//   close(name) {
//     $('#' + name).modal('hide');
//   }
//   source: LocalDataSource = new LocalDataSource();
//   differ: any;
//
//   constructor(protected service: SmartTablesService, private differs: IterableDiffers) {
//     this.source = new LocalDataSource();
//     this.differ = differs.find([]).create(null);
//   }
//
//   onDeleteConfirm(event): void {
//     if (window.confirm('Deseja remover este endereço?')) {
//       this.enderecos.forEach((item, index) => {
//         if (item == event.data) {
//           this.enderecos.splice(index, 1);
//         }
//       });
//       event.confirm.resolve();
//     } else {
//       event.confirm.reject();
//     }
//   }
//
//   onCreateConfirm(event): void {
//     if (this.isValid(event.newData)) {
//       //todo if is valid!!
//       console.log(event.source)
//       this.enderecos.push(event.newData);//todo solution to this "solution"
//       event.confirm.resolve(event.newData);
//     } else {
//       event.confirm.reject();
//     }
//
//
//   }
//
//   onEditConfirm(event): void {
//
//     this.enderecos.forEach((item, index) => {
//       if (item == event.data) {
//         item = event.newData;
//       }
//     });
//     event.confirm.resolve(event.newData);
//   }
//
//   isValid(data): boolean {
//     for (var i in data) {
//       if (!data[i] && i != 'id') {
//         return false;
//       }
//     }
//     return true;//validar com alert
//
//   }
// }
