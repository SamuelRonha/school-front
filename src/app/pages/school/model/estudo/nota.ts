import {Base} from "../base/base";
import {Anoletivo} from "./anoletivo";
import {Separador} from "./separador";
import {Aula} from "./aula";

export class Nota extends Base {
  aula: Aula = new Aula();
  tipo: string;
  separador: Separador = new Separador();
}
