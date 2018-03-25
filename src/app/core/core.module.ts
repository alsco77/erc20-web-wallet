import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';


import { Web3Service } from './web3.service';
import { WebFuncService } from './web-func.service';
import { Utils } from './utils';
import { ABI } from './abi';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WeiToEthPipe } from './pipes/wei-to-eth.pipe';

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatFormFieldModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatFormFieldModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule
  ],
  declarations: [
    ToolbarComponent,
    WeiToEthPipe,
    CurrencyFormatPipe
  ],
  providers: [
    Web3Service,
    WebFuncService,
    Utils,
    ABI
  ],
  exports: [
    CommonModule,
    CurrencyFormatPipe,
    FlexLayoutModule,
    FormsModule,
    ToolbarComponent,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
    WeiToEthPipe
  ]
})
export class CoreModule { }
