import {Component, Input, OnInit} from '@angular/core';
import {Usuario} from "../../model/pessoas/usuario";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  @Input() usuario: Usuario = new Usuario();
  constructor() { }

  ngOnInit() {
  }

}
