import {Base} from "../base/base";
import {Funcionario} from "../pessoas/funcionario";
import {Turma} from "../estudo/turma";
import {Aluno} from "../pessoas/aluno";

export class Requisicao extends Base {
  nome: string;
  descricao: string;
  funcionario: Funcionario = new Funcionario();
  turma: Turma = new Turma();
  aluno: Aluno = new Aluno();
}
