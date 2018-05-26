import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Ievent } from "../ievent";

import { Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class EventService {

constructor( private _http: Http ) { }

//add url path
private _dbUrl = 'events';

//This function takes in and ID or type number
//getEvent(id:number){
//  return EVENTS.find(event => event.id === id)
//}

//This method calls to server to get data
getEvent(): Observable<Ievent[]>{
  let eventData = localStorage.getItem('events');
  if (eventData){
    return Observable.create(observer => {
      observer.next(JSON.parse(eventData))
    });
  }
  return this._http.get(this._dbUrl).pipe(map((response: Response) =>{
    let data: Ievent[] = <Ievent[]>response.json();
    localStorage.setItem('events', JSON.stringify(data));
    return data;
    }))
}

// const EVENTS =  [
  //   {
  //     id: 1,
  //     name: 'World Jiu Jitsu Championship',
  //     date: '1/26/2036',
  //     time: '10:00 am',
  //     Registration: 599.99,
  //     imageUrl: '/assets/images/angularconnect-shield.png',
  //     location: {
  //       address: '1057 DT',
  //       city: 'Long Beach',
  //       country: 'United States'
  //     }
  //   },
  //   {
  //     id: 2,
  //     name: 'Pan American Jiu Jitsu Championship',
  //     date: '4/26/2036',
  //     time: '10:00 am',
  //     Registration: 599.99,
  //     imageUrl: '/assets/images/angularconnect-shield.png',
  //     location: {
  //       address: '1057 DT',
  //       city: 'Irvine',
  //       country: 'United States'
  //     }
  //   },
  //   {
  //     id: 3,
  //     name: 'American National Jiu Jitsu Championship',
  //     date: '7/26/2036',
  //     time: '10:00 am',
  //     Registration: 599.99,
  //     imageUrl: '/assets/images/angularconnect-shield.png',
  //   },
  //   {
  //     id: 4,
  //     name: 'Atlanta Open Jiu Jitsu Championship',
  //     date: '8/26/2036',
  //     time: '10:00 am',
  //     Registration: 599.99,
  //     imageUrl: '/assets/images/angularconnect-shield.png',
  //     location: {
  //       address: '1057 DT',
  //       city: 'Atlanta',
  //       country: 'United States'
  //     }
  //   },
  //   {
  //     id: 5,
  //     name: 'Seattle Open Jiu Jitsu Championship',
  //     date: '11/26/2036',
  //     time: '10:00 am',
  //     Registration: 599.99,
  //     imageUrl: '/assets/images/angularconnect-shield.png',
  //     location: {
  //       address: '1057 DT',
  //       city: 'Seattle',
  //       country: 'United States'
  //     }
  //   }
}
