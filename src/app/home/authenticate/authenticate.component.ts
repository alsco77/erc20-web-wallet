import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from '../../core/web3.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'oasis-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  public privateKey: string;
  public retrievingKey = false;

  public error: string;
  public showError = false;

  constructor(private web3: Web3Service, private router: Router) { }

  ngOnInit() {
  }

  isHexString(str: string): boolean {
    if (str === '') {
      return true;
    }
    str = str.substring(0, 2) === '0x' ? str.substring(2).toUpperCase() : str.toUpperCase();
    const re = /^[0-9A-F]+$/g;
    return re.test(str);
  }

  async retrieveAccountAsync(pkey: string) {
    this.showError = false;
    if (this.isHexString(pkey)) {
      this.retrievingKey = true;
      try {
        const acc = await this.web3.getAccountFromPKeyAsync(pkey);
        if (acc != null) {
          this.router.navigate(['/dashboard']);
        }
        this.retrievingKey = false;
      } catch (e) {
        this.retrievingKey = false;
        this.showError = true;
        this.error = 'Error retrieving associated account';
      }
    } else {
      this.showError = true;
      this.error = 'Private key must be a hex string';
    }
  }

}
