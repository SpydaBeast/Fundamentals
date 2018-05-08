import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/event-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component'
import { NavComponent } from './nav/nav.component';
import { EventService } from './event.service'
import { ToastrService } from './common/toastr.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent
],
  imports: [
    BrowserModule
  ],
  providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
