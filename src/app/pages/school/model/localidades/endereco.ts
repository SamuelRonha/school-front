import {Base} from "../base/base";
import {Cidade} from "./cidade";

export class Endereco extends Base {
  tipo: string;
  rua: string;
  numero: string;
  bairro: string;
  complemento: string;
  observacao: string;
  cep:string;
  hash: number;
  cidade: Cidade = new Cidade();



}
