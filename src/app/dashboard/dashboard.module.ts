import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './dashboard.component';
import { CoinSummaryComponent } from './coin-summary/coin-summary.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
    ]),
    CoreModule
  ],
  declarations: [
    DashboardComponent,
    CoinSummaryComponent
  ]
})
export class DashboardModule { }
