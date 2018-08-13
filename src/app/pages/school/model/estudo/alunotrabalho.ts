import {Base} from "../base/base";
import {Aluno} from "../pessoas/aluno";
import {Trabalho} from "./trabalho";

export class Alunotrabalho extends Base {
  aluno: Aluno;
  trabalho: Trabalho;
  status: number;

}
