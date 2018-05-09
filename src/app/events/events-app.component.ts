import { Component } from '@angular/core'
import { Routes }  from '@angular/router'


@Component({
  selector: 'events-app',
  template: `
  <app-nav></app-nav> 
  <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'Martial Arts Events';
}
