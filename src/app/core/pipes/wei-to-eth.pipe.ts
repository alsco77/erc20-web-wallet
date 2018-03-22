import { Pipe, PipeTransform } from '@angular/core';

const Web3 = require('web3');

@Pipe({
  name: 'weiToEth'
})
export class WeiToEthPipe implements PipeTransform {

  transform(wei: number, args?: any): number {
    const weiString = Web3.utils.toBN(wei).toString();
    return Web3.utils.fromWei(weiString, 'ether');
  }

}
