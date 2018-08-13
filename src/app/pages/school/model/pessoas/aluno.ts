import {Base} from "../base/base";
import {Pessoa} from "./pessoa";
import {Formacao} from "../basicos/formacao";
import {Parentesco} from "./parentesco";
import {Turma} from "../estudo/turma";
import {Sala} from "../localidades/sala";

export class Aluno extends Base {
  numero: string;
  pessoa: Pessoa = new Pessoa();
  formacaos: Array<Formacao> = new Array();
  parentescos: Array<Parentesco> = new Array();
  horaAulas: Array<Formacao> = new Array();
  nome: string;
}
