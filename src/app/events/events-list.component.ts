import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr>
    <div class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <div> Date: {{event.date}}</div>
      <div> Time: {{event.time}}</div>
      <div> Price: \${{event.registration}}</div>
    </div>
  </div>
  `
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  event = {
    id: 1,
    name: 'Jiu Jitsu World Championship',
    date: '1/1/2020',
    time: '9:00 am',
    registration: 165.00,
    imageUrl: '',
    location:{
      address: ' 555 example road',
      city: 'London',
      country: "United States"
    }

  }

}
