import {Base} from "../base/base";
import {Aula} from "./aula";
import {Horadia} from "./horadia";
import {Separador} from "./separador";

export class Horaaula extends Base {
  aula: Aula;
  diaSemana: string;
  hora: string;
  separador: Separador = new Separador();
}
