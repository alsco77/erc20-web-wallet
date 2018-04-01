import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Web3Service, EthAccount, TransactionReceipt } from '../../../core/web3.service';
import { Coin } from '../../../core/coin';

@Component({
  selector: 'oasis-purchase-token-dialog',
  templateUrl: './purchase-token-dialog.component.html',
  styleUrls: ['./purchase-token-dialog.component.css',
    './purchase-token-dialog.component.scss-theme.scss']
})
export class PurchaseTokenDialogComponent implements OnInit {

  coin: Coin;
  account: EthAccount;

  purchaseAmountEth = '0.000';
  gweiAmount = 11;
  gasLimit = 25000;
  ethBalance: string;

  error = false;
  errorMessage: string;
  sending = false;

  transactionSent = false;
  txHash: string;

  constructor(public dialogRef: MatDialogRef<PurchaseTokenDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private web3Service: Web3Service) {
    this.coin = data.coin;
    this.account = data.account;
  }

  async ngOnInit() {
    this.ethBalance = await this.web3Service.getEthBalanceAsync(this.account.address);
  }

  getTokenAmount() {
    return (parseFloat(this.purchaseAmountEth) * this.coin.ratio).toFixed(8);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getGasCostEth(gas: number, gwei: number) {
    const costInGwei = gas * gwei;
    const costInWei = this.web3Service.web3.utils.toWei(costInGwei.toString(), 'gwei');
    return this.web3Service.web3.utils.fromWei(costInWei);
  }

  async estimateGas(ethAmount: string, gasPriceGwei: number, gasLimit: number) {
    if (parseFloat(ethAmount) > 0) {
      const tx = await this.web3Service.getPurchaseTokensTransaction(this.account.address, this.coin.saleContractAddress,
        this.web3Service.web3.utils.toHex(this.web3Service.web3.utils.toWei(ethAmount)), gasPriceGwei, 250000);
      console.log('evaluating cost of tx:' + JSON.stringify(tx));
      this.gasLimit = await this.web3Service.estimateGasAsync(tx);
    }
  }

  setTransactionAsSent(txHash: string) {
    this.transactionSent = true;
    this.sending = false;
    this.txHash = txHash;
  }

  getTxLink(txHash: string) {
    return 'https://ropsten.etherscan.io/tx/' + txHash;
  }

  async purchaseTokensAsync(ethAmount: string, gasPriceGwei: number, gasLimit: number) {

    if (parseFloat(ethAmount) > 0) {
      this.sending = true;
      this.error = false;
      try {
        const result = await this.web3Service.purchaseTokensAsync(this.account.address, this.account.privateKey,
          this.coin.saleContractAddress, this.web3Service.web3.utils.toHex(this.web3Service.web3.utils.toWei(ethAmount)),
          gasPriceGwei, gasLimit, this.setTransactionAsSent.bind(this));
        if (!result || parseInt(result.status, 16) === 0) {
          this.setError('Transaction sending failed');
        } else {
          this.setTransactionAsSent(result.transactionHash);
          // setTimeout(() => this.dialogRef.close(true), 5000);
        }
      } catch (e) {
        this.setError('Transaction sending failed');
      }
    } else {
      this.setError('Purchase amount must be a positive number');
    }
  }

  setError(message: string): void {
    if (!this.transactionSent) {
      this.sending = false;
      this.error = true;
      this.errorMessage = message;
    }
  }
}
