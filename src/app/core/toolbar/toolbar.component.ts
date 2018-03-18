import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oasis-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public githubUrl: 'http://www.github.com/alsco77/erc20-web-wallet';

  constructor() { }

  ngOnInit() {
  }

}
