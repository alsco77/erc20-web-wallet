import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

const Web3 = require('web3');

export class EthAccount {
  address: string;
  privateKey: string;
  signTransaction: Function;
  sign: Function;
  encrypt: Function;
}


@Injectable()
export class Web3Service {

  public web3: any;
  private authenticatedAccount = new BehaviorSubject<EthAccount>(null);
  public authenticatedAccount$ = this.authenticatedAccount.asObservable();


  constructor() {
    if (typeof this.web3 !== 'undefined') {
      this.web3 = new Web3(this.web3.currentProvider);
    } else {
      this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));
    }
  }

  async getAccountFromPKeyAsync(pkey: string): Promise<EthAccount> {
    const acc = await this.web3.eth.accounts.privateKeyToAccount(pkey);
    if (acc != null) {
      this.authenticatedAccount.next(acc);
    }
    return Promise.resolve(acc);
  }

  async getTokenBalanceAsync(ethAddr: string, tokenAddr: string) {
    const ethAddrSub = ethAddr.substring(2);
    const contractData = this.web3.utils.sha3(`balanceOf()`).substr(0, 10) + '000000000000000000000000' + ethAddrSub;
    this.web3.eth.call({
      to: '0x1400e4e754f91c9d58dcf2d0029ed988a053c316',
      data: contractData
    }, (err, result) => {
      if (result) {
        const tokens = this.web3.utils.toBN(result).toString();
        console.log('Tokens Owned: ' + this.web3.utils.fromWei(tokens, 'ether'));
      } else {
        console.log(err); // Dump errors here
      }
    });
    return '';
  }

}
