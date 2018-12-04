import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngAdventureMan';

  constructor(
    private _router: Router
  ){

  }

  ngOnInit(){
    this.subscribeToRoutingEvents();
  }

  subscribeToRoutingEvents(){
    this._router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        console.log('Routing Event', event);
      }
    })
  }
}
