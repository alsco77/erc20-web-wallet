import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../../core/web3.service';

@Component({
  selector: 'oasis-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  public privateKey: string;
  public address: string;

  constructor(private web3: Web3Service) { }

  ngOnInit() {
  }

  async retrieveAccountAsync(pkey: string) {
    const acc = await this.web3.getAccountAsync(pkey);
    this.address = acc.address;
  }

}
