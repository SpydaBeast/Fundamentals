import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event:any
  constructor( private eventService: EventService) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(1)
  }

}
