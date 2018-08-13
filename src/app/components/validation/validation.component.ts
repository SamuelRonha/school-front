import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-validation',
  template: `
    <div class="container">
      <ul>
        <li *ngFor="let message of messages">{{message}}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  @Input() messages: Array<string>;

  constructor() {
  }

  ngOnInit() {
  }

}
