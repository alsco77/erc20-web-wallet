import { Component } from '@angular/core';
import { routerTransition } from './core/animations/router.animations';

@Component({
  selector: 'oasis-root',
  animations: [routerTransition],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Oasis';

  getState(outlet) {
    if (outlet.activated) {
      return outlet.activatedRouteData.state;
    }
    return null;
  }
}
