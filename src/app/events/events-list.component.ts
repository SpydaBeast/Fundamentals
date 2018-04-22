import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
  <div>
      <h1>Upcoming Competitions</h1>
      <event-thumbnail
      [event] = "event1" ></event-thumbnail>
  </div>
  `
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Jiu Jitsu World Championship',
    date: '1/1/2020',
    time: '9:00 am',
    registration: 165.00,
    imageUrl: '',
    location:{
      address: ' 555 example road',
      city: 'Long Beach',
      country: "United States"
    }

  }

}
