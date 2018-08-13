import {Aluno} from "../pessoas/aluno";
import {Tarefa} from "./tarefa";
import {Nota} from "./nota";
import {Base} from "../base/base";

export class Alunotarefa extends Base {
  aluno: Aluno =  new Aluno();
  tarefa: Tarefa = new Tarefa();
  nota: Nota = new Nota();
  status: number;
}
