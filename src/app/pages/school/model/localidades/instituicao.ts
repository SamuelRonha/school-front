import {Base} from "../base/base";
import {Endereco} from "./endereco";

export class Instituicao extends Base {
  endereco: Endereco = new Endereco();
  nome: string;
  documento: string;
  nre: string;
  descricao: string;
  autorizacao: string;
  inscmun: string;
  credenciamento: string;
}
