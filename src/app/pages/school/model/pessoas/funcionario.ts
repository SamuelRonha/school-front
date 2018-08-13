import {Pessoa} from "./pessoa";
import {Funcao} from "../basicos/funcao";
import {Base} from "../base/base";

export class Funcionario extends Base {
  pessoa: Pessoa = new Pessoa();
  salario: number;
  funcao: Funcao = new Funcao();

}
