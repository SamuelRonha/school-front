import {Base} from "../base/base";

export class Usuario extends Base {
  username: string;
  senha: string;
  acesso: string = 'BASICO';
  status: string;
}
