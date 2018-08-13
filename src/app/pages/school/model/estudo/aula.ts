import {Sala} from "../localidades/sala";
import {Horadia} from "./horadia";
import {Materia} from "./materia";
import {Professor} from "../pessoas/professor";
import {Base} from "../base/base";

export class Aula extends Base {
  materia: Materia = new Materia();
  professor: Professor = new Professor();
  nome: string;

  toString(): string {
    return this.nome;
  }
}
