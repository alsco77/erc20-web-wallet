import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { Utils } from './utils';

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


  constructor(private utils: Utils) {
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

  private async ethCallAsync(contractAddr: string, data: string): Promise<any> {
    // await this.web3.eth.call({
    //   to: tokenAddr,
    //   data: contractData
    // };
  }

  async getTokenBalanceAsync(userAddress: string, tokenAddr: string): Promise<number> {
    const parsedUserAddress = this.utils.getNakedAddress(userAddress);
    const functionHash = this.utils.getFunctionSignature('balanceOf(address)');
    const contractData = functionHash + '000000000000000000000000' + parsedUserAddress;
    const balanceHex = await this.web3.eth.call({
      to: tokenAddr,
      data: contractData
    });
    if (balanceHex) {
      const tokens = this.utils.hexToDecimal(balanceHex);
      console.log('Tokens Owned: ' + tokens);
      return Promise.resolve(tokens);
    }
    return Promise.reject(null);
  }

  async getEthBalanceAsync(userAddress: string): Promise<number> {
    // confirm useraddress has 0x
    const balance = await this.web3.eth.getBalance(userAddress);
    if (balance) {
      console.log(balance);
      const tokens = this.web3.utils.toBN(balance).toString();
      console.log('Eth Owned: ' + this.web3.utils.fromWei(tokens, 'ether'));
      return Promise.resolve(tokens);
    }
    return Promise.reject(null);
  }
}
