import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WebFuncService {

  coinMarketCapApi = 'https://api.coinmarketcap.com/v1/';

  constructor(private http: Http) { }

  async getCurrentPriceAsync(coinId: string): Promise<number> {
    // const res = await this.http.get(this.coinMarketCapApi + '/ticker/' + coinId).toPromise();
    // console.log(res);
    // console.log(JSON.stringify(res));
    // if (res) {
    //   return Promise.resolve(parseFloat(res['price_usd']));
    // }
    return Promise.resolve(null);
  }

}
