import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Web3Service, EthAccount } from '../../core/web3.service';
import { WebFuncService } from '../../core/web-func.service';
import { Coin } from '../../core/coin';



@Component({
  selector: 'oasis-coin-summary',
  templateUrl: './coin-summary.component.html',
  styleUrls: ['./coin-summary.component.css']
})
export class CoinSummaryComponent implements OnInit, OnChanges {

  @Input() coin: Coin;
  @Input() account: EthAccount;

  balance: string;
  price: number = null;
  balanceLoaded = false;

  constructor(private web3Service: Web3Service, private webFunc: WebFuncService) { }

  isEthereum() {
    return this.coin.id === 'ethereum';
  }

  async ngOnInit() {
    // const filter = this.web3Service.web3.eth.subscribe('latest');
    // filter.watch((err, res) => {
    //   if (err) {
    //     console.log(`Watch error: ${err}`);
    //   } else {
    //     Update balance
    //     this.setBalanceAsync();
    //   }
    // });
    this.setBalanceAsync();
    // this.price = await this.webFunc.getCurrentPrice(this.coin.id);
  }

  async setBalanceAsync() {
    if (this.isEthereum()) {
      this.balance = await this.web3Service.getEthBalanceAsync(this.account.address);
    } else {
      this.balance = await this.web3Service.getTokenBalanceAsync(this.account.address, this.coin.contractAddress);
    }
    this.balanceLoaded = true;
  }

  async ngOnChanges(changes: SimpleChanges) {
    // const newAccountAddr: string = changes.accountAddr.currentValue;
    // this.balance = await this.web3.getTokenBalanceAsync(newAccountAddr, this.contractAddr);
  }

  purchaseTokens(ethAmount: number, gasPriceGwei: number, gasLimit: number) {
    const result = this.web3Service.purchaseTokensAsync(this.account.address, this.account.privateKey, this.coin.contractAddress,
       this.web3Service.web3.utils.toHex(this.web3Service.web3.utils.toWei(ethAmount)), gasPriceGwei, gasLimit);
  }
}
