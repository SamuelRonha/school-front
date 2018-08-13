import {Base} from "../base/base";

export class Materia extends Base {
  nome: string;
  descricao: string;
  observacao: string;


  toString(): string {
    return this.nome;
  }
}
