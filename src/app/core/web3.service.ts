import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { Utils } from './utils';
import { ABI } from './abi';

const Web3 = require('web3');
const Tx = require('ethereumjs-tx');

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


  constructor(private utils: Utils, private abi: ABI) {
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

  async getTokenBalanceAsync(userAddress: string, tokenAddr: string): Promise<string> {
    const parsedUserAddress = this.utils.getNakedAddress(userAddress);
    const functionHash = this.utils.getFunctionSignature('balanceOf(address)');
    const contractData = functionHash + '000000000000000000000000' + parsedUserAddress;
    const balanceHex = await this.web3.eth.call({
      to: tokenAddr,
      data: contractData
    });
    if (balanceHex) {
      // const tokens = this.utils.hexToDecimal(balanceHex);
      // console.log('Tokens Owned: ' + tokens);
      return Promise.resolve(this.web3.utils.toBN(balanceHex).toString());
    }
    return Promise.reject(null);
  }

  async getEthBalanceAsync(userAddress: string): Promise<string> {
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


  async transferTokensTest(): Promise<any> {
    const myAddress = '0xdc3260Ff09a04d6922DFC873a208F717398b9320';
    const count = await this.web3.eth.getTransactionCount(myAddress);
    const contractAddress = '0xd0cd15c52eef857928035e62db3410bbc1aad64b';
    const contract = new this.web3.eth.Contract(this.abi.crowdsale, contractAddress, {
        from: myAddress
    });
    // Use Gwei for the unit of gas price
    const gasPriceGwei = 31;
    const gasLimit = 250000;

    const chainId = 3;
    const rawTransaction = {
        'from': myAddress,
        'nonce': '0x' + count.toString(16),
        'gasPrice': this.web3.utils.toHex(gasPriceGwei * 1e9),
        'gasLimit': this.web3.utils.toHex(gasLimit),
        'to': contractAddress,
        'value': this.web3.utils.toHex(this.web3.utils.toWei('1')),
        'data': contract.methods.buyTokens(myAddress).encodeABI(),
        'chainId': chainId
    };

    console.log(`Raw of Transaction: \n${JSON.stringify(rawTransaction, null, '\t')}\n------------------------`);
    // The private key for myAddress in .env
    const privKey = new Buffer('f1c78fdd6985d11f17f4f68e4527c2cc71b948a78e1bb262596c3f78ad558297', 'hex');

    const tx = new Tx(rawTransaction);
    tx.sign(privKey);
    const serializedTx = tx.serialize();

    console.log(`Attempting to send signed tx:  ${serializedTx.toString('hex')}\n------------------------`);

    const receipt = await this.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));

    console.log(`Receipt info: \n${JSON.stringify(receipt, null, '\t')}\n------------------------`);
  }
}
