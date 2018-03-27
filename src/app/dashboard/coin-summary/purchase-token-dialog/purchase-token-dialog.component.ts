import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Web3Service, EthAccount } from '../../../core/web3.service';
import { Coin } from '../../../core/coin';

@Component({
  selector: 'oasis-purchase-token-dialog',
  templateUrl: './purchase-token-dialog.component.html',
  styleUrls: ['./purchase-token-dialog.component.css']
})
export class PurchaseTokenDialogComponent implements OnInit {

  coin: Coin;
  account: EthAccount;

  purchaseAmountEth = '0.000';
  weiAmount = 11;

  error = false;
  errorMessage: string;
  saving = false;
  saved = false;

  constructor(public dialogRef: MatDialogRef<PurchaseTokenDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any, private web3Service: Web3Service) {
    this.coin = data.coin;
    this.account = data.account;
  }

  ngOnInit() {
  }

  getTokenAmount() {
    return parseFloat(this.purchaseAmountEth) * this.coin.ratio;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  async purchaseTokensAsync (ethAmount: number, gasPriceGwei: number, gasLimit: number) {
    this.saving = true;
    this.error = false;

    const result = await this.web3Service.purchaseTokensAsync(this.account.address, this.account.privateKey, this.coin.saleContractAddress,
       this.web3Service.web3.utils.toHex(this.web3Service.web3.utils.toWei(ethAmount)), gasPriceGwei, gasLimit);
    if (result) {
      const status = parseInt(result.status, 16);
      console.log(status);
      if (status === 1) {
        // return status
        // success - result.transactionHash should show
        // this.saved = true;
        this.saved = true;
        setTimeout(() => this.dialogRef.close(true), 3500);
      } else {
        this.setError('Transaction sending failed');
      }
    } else {
      this.setError('Transaction compilation dailed');
    }
  }

  setError(message: string): void {
    this.saving = false;
    this.error = true;
    this.errorMessage = message;
  }

}
