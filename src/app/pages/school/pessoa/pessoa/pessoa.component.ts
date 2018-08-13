import {Component, Input, OnInit} from '@angular/core';
import {Pessoa} from "../../model/pessoas/pessoa";
import {NgUploaderOptions} from "ngx-uploader/src/classes/ng-uploader-options.class";

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  @Input() pessoa: Pessoa = new Pessoa();

  public uploaderOptions:NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  constructor() {
  }

  ngOnInit() {
  }

}
