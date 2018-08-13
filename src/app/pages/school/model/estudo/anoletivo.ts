import {Base} from "../base/base";
import {Separador} from "./separador";

export class Anoletivo extends Base {
  ano: number = new Date().getFullYear();
  nome: string;
  separadors: Array<Separador> = new Array<Separador>();
  inicio: Date;
  fim: Date;


  toString(): string {
    return "" + this.ano;
  }
}
