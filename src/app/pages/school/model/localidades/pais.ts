import {Base} from "../base/base";

/**
 * Created by Samuel on 12/10/2017.
 */

export class Pais extends Base {
  nome: string;
  codigo: number;

  toString(): string {
    return this.nome;
  }
}
