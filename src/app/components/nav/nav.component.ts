import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  title: String = "poxa";
  @Input() itens: string[] = ["Inicio", "Sobre", "Hello", "panel"];
  @Input() routes: string[];


  login(): void {
    console.log('pow');
  }


  home(): void {
    this.router.navigate(['/home', ""]);
  }


}
