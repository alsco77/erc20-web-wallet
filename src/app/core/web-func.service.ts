import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WebFuncService {

  coinMarketCapApi = 'https://api.coinmarketcap.com/v1/';

  constructor(private http: Http) { }

  // getCurrentPrice(coinId: string): Promise<number> {
  //   this.http.get(this.coinMarketCapApi + '/ticker/' + coinId).subscribe(res => {
  //     console.log(res);
  //     // return Promise.resolve(parseInt(coinInfo.price_usd, 10));
  //     return Promise.resolve(53);
  //   }, err => {
  //     return Promise.reject(null);
  //   });
  // }

}
