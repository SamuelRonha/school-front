import {Base} from "../base/base";
import {Materia} from "./materia";
import {Professor} from "../pessoas/professor";
import {Turma} from "./turma";

export class Trabalho extends Base {
  titulo: string;
  descricao: string;
  tipo: number;
  inicio: Date;
  fim: Date;
  materua: Materia;
  professor: Professor;
  turmas: Array<Turma>;
}
