import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';


import { Web3Service } from './web3.service';
import { Utils } from './utils';
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

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
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
    WeiToEthPipe
  ],
  providers: [
    Web3Service,
    Utils
  ],
  exports: [
    CommonModule,
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
