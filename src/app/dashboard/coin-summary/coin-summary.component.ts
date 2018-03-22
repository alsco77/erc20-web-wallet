import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Web3Service } from '../../core/web3.service';
import { Coin } from '../../core/coin';

@Component({
  selector: 'oasis-coin-summary',
  templateUrl: './coin-summary.component.html',
  styleUrls: ['./coin-summary.component.css']
})
export class CoinSummaryComponent implements OnInit, OnChanges {

  @Input() coin: Coin;
  @Input() accountAddr: string;

  balance: number;

  constructor(private web3: Web3Service) { }

  isEthereum() {
    return this.coin.id === 'ethereum';
  }

  async ngOnInit() {
    if (this.isEthereum()) {
      this.balance = await this.web3.getEthBalanceAsync(this.accountAddr);
    } else {
      this.balance = await this.web3.getTokenBalanceAsync(this.accountAddr, this.coin.contractAddress);
    }
  }

  async ngOnChanges(changes: SimpleChanges) {
    // const newAccountAddr: string = changes.accountAddr.currentValue;
    // this.balance = await this.web3.getTokenBalanceAsync(newAccountAddr, this.contractAddr);
  }

}
