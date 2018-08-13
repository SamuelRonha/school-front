import {Aluno} from "../pessoas/aluno";
import {Nota} from "./nota";
import {Base} from "../base/base";

export class Alunonota extends Base {
  aluno: Aluno = new Aluno();
  notas: Array<Nota> = new Array();
}
