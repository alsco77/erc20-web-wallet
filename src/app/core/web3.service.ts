import { Injectable } from '@angular/core';

const Web3 = require('web3');


@Injectable()
export class Web3Service {

  public web3: any;

  constructor() {
    // if (typeof this.web3 !== 'undefined') {
    //   this.web3 = new Web3(this.web3.currentProvider);
    // } else {
      const Ganache = require('ganache-core');
      this.web3 = new Web3();
      this.web3.setProvider(Ganache.provider());
    // }
  }
}
