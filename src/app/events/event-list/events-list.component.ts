import { Component, OnInit, NgModule } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { ToastrService } from '../../common/toastr.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Ievent } from '../../ievent'
import { Router } from '@angular/router';

//Lets typescript know that toastr variable is declared some where in scope.
declare let _toastr

@Component({
  templateUrl: './events-list.component.html',
  styles:[`
    .thumbnail { min-height: 210px;}
    .pad-left { margin-left: 10px;}
    .well div { color: #bbb; } 
  `],
  providers: [EventService]
})

// "implements" declairation lets typescript know that this component implements ngOnInit
export class EventsListComponent implements OnInit {
  //Injects the EventService into this component
  constructor(private _eventService: EventService, 
              private _toastr: ToastrService,
              private _snackBar: MatToolbarModule,
              private _router: Router){
  }

  ngOnInit(): void {
    this.getEvents()
  }
  public events: Array<Ievent>;

  getEvents(): void{
    this._eventService.getEvents()
      .subscribe(
        events => this.events = events,
        error => this.updateMessage(<any>error, 'error'));
  }
  updateMessage(message: string, type: string): void{
    if (message){
    //this._snackBar.open(`${type}: ${message}`, 'DISMISS',{duration: 3000});
    }
  }

  handleThumbnailClick(eventName){
    //this is an injected toastr service
    this._toastr.success(eventName)
  }
}