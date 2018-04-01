import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Web3Service, EthAccount } from '../../core/web3.service';
import { WebFuncService } from '../../core/web-func.service';
import { Coin } from '../../core/coin';
import { PurchaseTokenDialogComponent } from './purchase-token-dialog/purchase-token-dialog.component';

@Component({
  selector: 'oasis-coin-summary',
  templateUrl: './coin-summary.component.html',
  styleUrls: ['./coin-summary.component.css', './coin-summary.component.scss-theme.scss']
})
export class CoinSummaryComponent implements OnInit, OnChanges {

  @Input() coin: Coin;
  @Input() account: EthAccount;

  balance: string;
  price: number = null;
  balanceLoaded = false;

  constructor(private web3Service: Web3Service, private webFunc: WebFuncService, public dialog: MatDialog) { }

  isEthereum() {
    return this.coin.id === 'ethereum';
  }

  async ngOnInit() {
    // subscribe to block even to keep balance up to date
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
  }


  purchaseTokens(watchListName: string) {
    const tokenPurchaseDialog = this.dialog.open(PurchaseTokenDialogComponent, {
      width: '500px',
      data: {
        coin: this.coin,
        account: this.account
      }
    });

    tokenPurchaseDialog.afterClosed().subscribe(res => {
      if (res !== undefined && res === true) {
          this.setBalanceAsync();
      }
    });
  }
}
