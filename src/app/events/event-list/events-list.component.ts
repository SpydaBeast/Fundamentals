import { Component, OnInit, NgModule } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { ToastrService } from '../../common/toastr.service';

//Lets typescript know that toastr variable is declared some where in scope.
declare let toastr

@Component({
  selector: 'events-list',
  template: `
  <div>
      <h1>Upcoming Competitions</h1>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event" ></event-thumbnail>
        </div>
      </div>
  </div>
  `,
  styles:[`
    .thumbnail { min-height: 210px;}
    .pad-left { margin-left: 10px;}
    .well div { color: #bbb; } 
  `]
})

// "implements" declairation lets typescript know that this component implements ngOnInit
export class EventsListComponent implements OnInit {
  //Injects the EventService into this component
  events: any[]
  constructor(private eventService: EventService, private toastr: ToastrService){
    //Not a good idea to put pontenially long running services in cotructor
    //this.events = this.eventService.getEvents()
  }

  ngOnInit() {
    this.events = this.eventService.getEvents()
  }

  handleThumbnailClick(eventName){
    //this is an injected toastr service
    this.toastr.success(eventName)
  }
}