import { Component, OnInit } from '@angular/core';
import { Web3Service, EthAccount } from '../core/web3.service';

@Component({
  selector: 'oasis-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  account: EthAccount;
  // contract1: '0x1400e4e754f91c9d58dcf2d0029ed988a053c316';

  constructor(private web3: Web3Service) {
    this.web3.authenticatedAccount$.subscribe(acc => {
      this.account = acc;
    });
  }

  ngOnInit() {
  }

}