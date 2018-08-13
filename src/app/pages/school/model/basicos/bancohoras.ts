import {Funcionario} from "../pessoas/funcionario";
import {Base} from "../base/base";

export class Bancohoras extends Base {
  funcionario: Funcionario;
  entrada: Date;
  saida: Date;
}
