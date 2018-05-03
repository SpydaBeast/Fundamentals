import { Injectable } from '@angular/core';

@Injectable()
export class EventService {

constructor() { }

//This method calls to server to get data
getEvents(){
    return EVENTS
    }
  getEvent(id:number) {
    return EVENTS.find(event +. event.id === id)
  }
}

const EVENTS =  [
    {
      id: 1,
      name: 'World Jiu Jitsu Championship',
      date: '1/26/2036',
      time: '10:00 am',
      Registration: 599.99,
      imageUrl: '/assets/images/angularconnect-shield.png',
      location: {
        address: '1057 DT',
        city: 'Long Beach',
        country: 'United States'
      }
    },
    {
      id: 2,
      name: 'Pan American Jiu Jitsu Championship',
      date: '4/26/2036',
      time: '10:00 am',
      Registration: 599.99,
      imageUrl: '/assets/images/angularconnect-shield.png',
      location: {
        address: '1057 DT',
        city: 'Irvine',
        country: 'United States'
      }
    },
    {
      id: 3,
      name: 'American National Jiu Jitsu Championship',
      date: '7/26/2036',
      time: '10:00 am',
      Registration: 599.99,
      imageUrl: '/assets/images/angularconnect-shield.png',
    },
    {
      id: 4,
      name: 'Atlanta Open Jiu Jitsu Championship',
      date: '8/26/2036',
      time: '10:00 am',
      Registration: 599.99,
      imageUrl: '/assets/images/angularconnect-shield.png',
      location: {
        address: '1057 DT',
        city: 'Atlanta',
        country: 'United States'
      }
    },
    {
      id: 5,
      name: 'Seattle Open Jiu Jitsu Championship',
      date: '11/26/2036',
      time: '10:00 am',
      Registration: 599.99,
      imageUrl: '/assets/images/angularconnect-shield.png',
      location: {
        address: '1057 DT',
        city: 'Seattle',
        country: 'United States'
      }
    }
  ]
