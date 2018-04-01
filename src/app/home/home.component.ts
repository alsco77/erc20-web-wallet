import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, group, query, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'oasis-home',
  animations: [trigger('authTransition', [
    transition('void => *', [
      style({ transform: 'translateY(200%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
    ]),
    transition('* => void', [
      style({ transform: 'translateY(0%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateY(200%)' }))
    ])
  ])],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authType = '';

  constructor() { }

  ngOnInit() {
  }

  createAccount() {

  }

  authViaPkey() {
    if (this.authType === 'pKey') {
      this.authType = '';
    } else {
      this.authType = 'pKey';
    }
  }

}
