import {Component, OnInit} from '@angular/core';
import {Requisicao} from "../../model/basicos/requisicao";
import {NgUploaderOptions} from "ngx-uploader/src/classes/ng-uploader-options.class";

@Component({
  selector: 'app-requisicao',
  templateUrl: './requisicao.component.html',
  styleUrls: ['./requisicao.component.scss']
})
export class RequisicaoComponent implements OnInit {

  requisicao: Requisicao = new Requisicao();
  //todo smart table alunos, funcionarios e turma onde só os selecionados veem
  constructor() {
  }

  public uploaderOptions: NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  public fileUploaderOptions: NgUploaderOptions = {
    // url: 'http://website.com/upload'
    fieldName: 'teste',
    maxUploads: 4,
    url: '',
  };

  ngOnInit() {
  }

}
