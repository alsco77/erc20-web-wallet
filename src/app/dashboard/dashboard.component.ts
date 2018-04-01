import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service, EthAccount } from '../core/web3.service';
import { FirebaseService } from '../core/firebase.service';
import { Coin } from '../core/coin';

@Component({
  selector: 'oasis-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  account: EthAccount;
  coins: Array<Coin> = [];

  constructor(private web3: Web3Service, private router: Router, private firebase: FirebaseService) {
  }

  ngOnInit() {
    this.web3.authenticatedAccount$.subscribe(acc => {
      if (acc == null) {
        this.router.navigate(['/']);
      } else {
        this.account = acc;
        this.firebase.coins.subscribe(arr => {
          console.log(JSON.stringify(arr));
          this.coins = arr;
        });
      }
    });
  }
}
