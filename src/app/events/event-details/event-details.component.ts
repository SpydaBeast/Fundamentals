import { Component, OnInit, NgModule, OnDestroy } from '@angular/core';
import { EventService } from '../../shared/event.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs';
import { Ievent } from '../../ievent'

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
  providers: [EventService]
})
export class EventDetailsComponent implements OnInit, OnDestroy {
  
  id:number;
  event: Ievent;
  sub:Subscription;

  constructor(private _eventService:EventService, 
              private _route:ActivatedRoute,
              private  _router: Router) { }
  
  ngOnInit() {
    if (!this.id){
      this.sub = this._route.params.subscribe(
        params =>  {
          let id = +params['id'];
          this.getEvent(id);
        });
    }
  }

  getEvent(id: number): void{
    this._eventService.getEvent(id).subscribe(
      event => this.event = event,
      error => this.updateMessage(<any>error, 'Error')
    )
  }

  updateMessage(message:string, type:string, actionText:string = 'DISMISS'){
    if (message){
    //  this._snackBar.open(`${type}: ${message}`, actionText, {duration: 3000});
    }
  }

  return(): void {
    this._router.navigate(['/events']);
  }


  ngOnDestroy(): void{
    if (this.sub){
      this.sub.unsubscribe()
    }
  }

}
