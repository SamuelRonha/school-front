import {Base} from "../base/base";
import {Endereco} from "../localidades/endereco";
import {Telefone} from "../localidades/telefone";
import {Usuario} from "./usuario";

export class Pessoa extends Base {
  nome: string;
  enderecos: Array<Endereco> = new Array();
  telefones: Array<Telefone> = new Array();
  cpf: string;
  email: string;
  foto: string;
  usuario: Usuario = new Usuario();
}
