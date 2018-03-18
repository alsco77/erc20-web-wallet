import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Web3Service } from '../../core/web3.service';

@Component({
  selector: 'oasis-coin-summary',
  templateUrl: './coin-summary.component.html',
  styleUrls: ['./coin-summary.component.css']
})
export class CoinSummaryComponent implements OnInit, OnChanges {

  @Input() name: string;
  @Input() accountAddr: string;
  // @Input() contractAddr: string;

  balance: string;

  constructor(private web3: Web3Service) { }

  async ngOnInit() {
    this.balance = await this.web3.getTokenBalanceAsync(this.accountAddr, '');
  }

  async ngOnChanges(changes: SimpleChanges) {
    const newAccountAddr: string = changes.accountAddr.currentValue;
    this.balance = await this.web3.getTokenBalanceAsync(newAccountAddr, '');
  }

}
