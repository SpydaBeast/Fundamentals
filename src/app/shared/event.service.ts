import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Ievent } from "../ievent";

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class EventService {

  private handleError(error: any): any {
    let  errMsg = (error.message) ? error.message : error.status ?
      `${error.status}  - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  constructor(private _http: Http) { }

  //add url path
  private _dbUrl = 'assets/api/events.json';

  //This method calls to server to get data
  getEvents(): Observable<Ievent[]> {
    let localEvent = localStorage.getItem('events');
    if (localEvent) {
      return Observable.create(observer => {
        observer.next(JSON.parse(localEvent))
      });
    }
    return this._http.get(this._dbUrl).map((response: Response)=>
    {
      let data: Ievent[] = <Ievent[]>response.json();
      localStorage.setItem('events', JSON.stringify(data));
      return data;
    })
    //.catchError(this.handleError)
  }

  getEvent(id: number): Observable<Ievent>{ 
    return this.getEvents().map((events: Ievent[]) =>
      events.find(e => e.id === id))
      //.catchError(this.handleError)
  }
}