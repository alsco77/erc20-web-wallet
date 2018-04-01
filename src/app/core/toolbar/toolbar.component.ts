import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { Web3Service } from '../web3.service';

@Component({
  selector: 'oasis-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  showMenu = false;
  web3Provider: string;
  githubUrl = 'http://www.github.com/alsco77/erc20-web-wallet';

  constructor(private firebase: FirebaseService, private router: Router, private web3: Web3Service) {
    this.web3.currentProvider$.subscribe(provider => {
      if (provider != null) {
        console.log(JSON.stringify(provider));
        this.web3Provider = provider;
      }
    });
  }

  ngOnInit() {
  }

  navigateToGithub() {
    const acc = this.web3.authenticatedAccount.getValue();
    const addr = acc == null || acc === undefined ? null : acc.address;
    this.firebase.logExternalUrlClicked(addr, this.githubUrl);
    window.location.href = this.githubUrl;
  }

}
