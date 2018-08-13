import {LocalDataSource, ServerDataSource} from "ng2-smart-table";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {ServerSourceConf} from "ng2-smart-table/lib/data-source/server/server-source.conf";
import {GenericService} from "./generic.service";
import {reject} from "q";

@Injectable()
export class CustomServerDataSource extends ServerDataSource {

  nome: string;

  constructor(protected http: Http, public genericService: GenericService, nome: string, conf?: ServerSourceConf | {}) {
    super(http, conf);
    this.nome = nome;
  }

  update(element: any, values: any): Promise<any> {
    console.log(values);

    return new Promise((resolve, reject) => {
      this.find(element).then(found => {
        //Copy the new values into element so we use the same instance
        //in the update call.
        if (true == true) {
          this.save(values).then(obj => {
            for (var i in element) {
              element[i] = values[i];
            }
            //Don't call super because that will cause problems - instead copy what DataSource.ts does.
            ///super.update(found, values).then(resolve).catch(reject);
            this.emitOnUpdated(element);
            this.emitOnChanged('update');
            resolve();
          }).catch(obj => {
            alert('Falha ao salvar ' + this.nome);
          });
        } else {
          reject
        }

      }).catch(reject);
    });
  }

  validate(data: any) {

  }


  add(element: any): Promise<any> {
    this.save(element).then(obj => {
      return super.add(element);
    });
    return Promise.reject(element);
  }

  save(data: any): Promise<any> {
    return this.genericService.save(this.nome, data);
  }

  find(element: any): Promise<any> {
    //Match by the trigger id
    const found: any = this.data.find(el => el.id === element.id);
    if (found) {
      return Promise.resolve(found);
    }
    return Promise.reject(new Error('Element was not found in the dataset'));
  }
}
