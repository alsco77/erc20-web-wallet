import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material';

import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './dashboard.component';
import { CoinSummaryComponent } from './coin-summary/coin-summary.component';
import { PurchaseTokenDialogComponent } from './coin-summary/purchase-token-dialog/purchase-token-dialog.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent,  data: {state: 'dashboard'}  },
    ]),
    CoreModule,
    MatSliderModule
  ],
  entryComponents: [
    PurchaseTokenDialogComponent
  ],
  declarations: [
    DashboardComponent,
    CoinSummaryComponent,
    PurchaseTokenDialogComponent
  ]
})
export class DashboardModule { }
