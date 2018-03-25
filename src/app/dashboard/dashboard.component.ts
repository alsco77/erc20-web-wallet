import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service, EthAccount } from '../core/web3.service';
import { Coin } from '../core/coin';

@Component({
  selector: 'oasis-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  account: EthAccount;
  coins: Array<Coin> = [
    {
      id: 'oasisCredit',
      name: 'Oasis Credit',
      symbol: 'OCR',
      contractAddress: '0xcab46d722ab70590d04b55ea27eb344ff806c0eb'
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      contractAddress: ''
    }
  ];

  constructor(private web3: Web3Service, private router: Router) {
    this.web3.authenticatedAccount$.subscribe(acc => {
      if (acc == null) {
        this.router.navigate(['/']);
      } else {
        this.account = acc;

      }
    });
  }

  ngOnInit() {
  }

  transferTokens() {
    this.web3.transferTokensTest();
  }

}
