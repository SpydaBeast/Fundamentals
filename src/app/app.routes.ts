import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events/event-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Errors404Component } from './errors/404/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { ModuleWithProviders } from '@angular/core';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Errors404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];



export const  routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);