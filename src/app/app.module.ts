import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events/events-app.component';
import { EventsListComponent } from './events/event-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component'
import { NavComponent } from './nav/nav.component';
import { EventService } from './shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { appRoutes } from './app.routes'
import { RouterModule, Routes } from '@angular/router'
import { CreateEventComponent } from './events/create-event/create-event.component'
import { Errors404Component } from './errors/404/404.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent, 
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Errors404Component,
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, ToastrService, EventRouteActivator],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
