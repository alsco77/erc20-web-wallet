import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';

import { AuthenticateComponent } from './authenticate/authenticate.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [
    AuthenticateComponent,
    HomeComponent
  ]
})
export class HomeModule { }
