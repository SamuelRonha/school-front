import {Base} from "../base/base";
import {Requisicao} from "./requisicao";
import {Aluno} from "../pessoas/aluno";

export class Requisicaoaluno extends Base {
  requisicao: Requisicao;
  aluno: Aluno;
}
