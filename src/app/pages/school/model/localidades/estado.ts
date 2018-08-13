import {Pais} from "./pais";
import {Base} from "../base/base";

export class Estado extends Base {
  pais: Pais = new Pais();
  nome: String;
  sigla: String;
  codigo: number;
}
