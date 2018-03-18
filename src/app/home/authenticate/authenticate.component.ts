import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from '../../core/web3.service';

@Component({
  selector: 'oasis-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  public privateKey: string;
  public retrievingKey = false;

  constructor(private web3: Web3Service, private router: Router) { }

  ngOnInit() {
  }

  async retrieveAccountAsync(pkey: string) {
    this.retrievingKey = true;
    const acc = await this.web3.getAccountFromPKeyAsync(pkey);
    if (acc != null) {
      this.router.navigate(['/dashboard']);
    }
    this.retrievingKey = false;
  }

}
