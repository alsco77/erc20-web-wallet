import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oasis-home',
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
