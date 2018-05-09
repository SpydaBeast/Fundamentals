import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'event-thumbnail',
  template: `
    <div>
      <hr>
      <div [routerLink] ="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div> Date: {{event.date}}</div>
        <div [ngClass]="getEventDate()" [ngSwitch] = "event?.date">
        <span *ngSwitchCase=" '1/26/2036' ">Registration Close</span>
        <span *ngSwitchDefualt>Open</span>
        </div>
        <div> Time: {{event.time}}</div>
        <div [class.red]="event?.time === '10:00 am'" [ngSwitch] = "event?.time">
          <span *ngSwitchCase=" '6:00 am' "></span>
          <span *ngSwitchCase=" '10:00 am' "></span>
          <span *ngSwitchDefault></span>
        </div>
        <div> Registration: \${{event.Registration}}</div>
          <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event.location.city}}, {{event?.location.country}}</span>
          </div>
        </div>
      </div>
    `,
  styles: [`
      .red { color: #DC143C  !important; }
      .bold { font-weight: bold; }
      .pad-left { margin-left: 10px; }
      .well div { color: auto; }
      `
  ]
})
export class EventThumbnailComponent {
  @Input() event: any

  getEventDate(){
    if (this.event && this.event.date === '1/26/2036')
    return ['red', 'bold']
    return ['']
  }

}

