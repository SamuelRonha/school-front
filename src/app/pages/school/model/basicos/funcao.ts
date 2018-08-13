import {Base} from "../base/base";

export class Funcao extends Base {
  nome: string;
  descricao: string;
  valor: string;
  tempo: string = "MENSAL";


  toString(): string {
    return this.nome;
  }
}
