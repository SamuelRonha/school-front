import {Base} from "../base/base";
import {Aluno} from "../pessoas/aluno";
import {Sala} from "../localidades/sala";
import {Horaaula} from "./horaaula";
import {Anoletivo} from "./anoletivo";

export class Turma extends Base {
  nome: string;
  alunos: Array<Aluno> = new Array();
  sala: Sala = new Sala();
  anoLetivo: Anoletivo = new Anoletivo();
  horaAulas: Array<Horaaula> = new Array();
}
