import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Web3Service } from '../../core/web3.service';
import { WebFuncService } from '../../core/web-func.service';
import { Coin } from '../../core/coin';

@Component({
  selector: 'oasis-coin-summary',
  templateUrl: './coin-summary.component.html',
  styleUrls: ['./coin-summary.component.css']
})
export class CoinSummaryComponent implements OnInit, OnChanges {

  @Input() coin: Coin;
  @Input() accountAddr: string;

  balance: string;
  price: number = null;
  balanceLoaded = false;

  constructor(private web3: Web3Service, private webFunc: WebFuncService) { }

  isEthereum() {
    return this.coin.id === 'ethereum';
  }

  async ngOnInit() {
    this.setBalanceAsync();
    // this.price = await this.webFunc.getCurrentPrice(this.coin.id);
  }

  async setBalanceAsync() {
    if (this.isEthereum()) {
      this.balance = await this.web3.getEthBalanceAsync(this.accountAddr);
    } else {
      this.balance = await this.web3.getTokenBalanceAsync(this.accountAddr, this.coin.contractAddress);
    }
    this.balanceLoaded = true;
  }

  async ngOnChanges(changes: SimpleChanges) {
    // const newAccountAddr: string = changes.accountAddr.currentValue;
    // this.balance = await this.web3.getTokenBalanceAsync(newAccountAddr, this.contractAddr);
  }

}
