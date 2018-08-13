import {Base} from "../base/base";
import {Aluno} from "../pessoas/aluno";
import {Materia} from "./materia";
import {Aula} from "./aula";
import {Turma} from "./turma";

export class Presenca extends Base {
  alunos: Array<Aluno> = new Array();
  data: string = new Date().toISOString();
  turma: Turma = new Turma();
  aula: Aula = new Aula();
}
