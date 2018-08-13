import {Base} from "../base/base";
import {Funcionario} from "./funcionario";
import {Materia} from "../estudo/materia";

export class Professor extends Base {
  funcionario: Funcionario = new Funcionario();
  materias: Array<Materia> = new Array();
}
