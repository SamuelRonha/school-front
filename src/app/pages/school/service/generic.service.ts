import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Page} from "../model/base/page";
import {Base} from "../model/base/base";

@Injectable()
export class GenericService {
  private url = 'http://localhost:8080/';  // URL to web api

  constructor(private http: Http) {
  }

  getItems(url: string, search = "", page: number = 3): Promise<Page> {
    console.log(this.url);
    console.log(this.url + url + `?page=${page}&size=3${search}`);
    return this.http
      .get(this.url + url + `?page=${page}&size=3${search}`)
      .toPromise()
      .then(response =>
        (response.json()) as Page
      )
      .catch(this.handleError);
  }

  save(url: string, base: Base): Promise<Page> {
    console.log(this.url + url);
    return this.http
      .post(this.url + url, base)
      .toPromise()
      .then(response =>
        (response.json()) as Object)
      .catch(this.handleError);
  }

  delete(url: string, id: number): Promise<string> {
    console.log(this.url + url);
    return this.http
      .delete(this.url + url + "/" + id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error);
    /* Todo: Add error handler on back end to put the fields and class with the error,
     then I handle them!! */
    return Promise.reject(error.message || JSON.parse(error._body));
  }
}
