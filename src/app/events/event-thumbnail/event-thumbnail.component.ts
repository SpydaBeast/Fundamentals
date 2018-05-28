import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Ievent } from '../../ievent'
@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
      .red { color: #DC143C  !important; }
      .bold { font-weight: bold; }
      .pad-left { margin-left: 10px; }
      .well div { color: auto; }
      `
  ]
})
export class EventThumbnailComponent {
  @Input() event: Ievent

  getEventDate(){
    if (this.event && this.event.date === '1/26/2036')
    return ['red', 'bold']
    return ['']
  }

}

