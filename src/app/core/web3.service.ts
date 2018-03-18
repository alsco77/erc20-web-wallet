import { Injectable } from '@angular/core';

const Web3 = require('web3');


@Injectable()
export class Web3Service {

  public web3: any;

  constructor() {
    if (typeof this.web3 !== 'undefined') {
      this.web3 = new Web3(this.web3.currentProvider);
    } else {
      this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));
    }
  }
}
