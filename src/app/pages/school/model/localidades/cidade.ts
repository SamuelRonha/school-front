import {Base} from "../base/base";
import {Estado} from "./estado";

export class Cidade extends Base {
  estado: Estado = new Estado();
  codigo: number;
  nome: string;

  toString(): string {
    return this.nome;
  }



}
