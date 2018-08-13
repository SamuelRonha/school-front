import {Model} from "./model";
import {Sort} from "./sort";

export class Page {
  content: Array<Model>;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Array<Sort>;
  first: boolean;
  numberOfElements: number;
}
