import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'event-thumbnail',
  template: `
    <div>
      <hr>
      <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div> Date: {{event.date}}</div>
        <div> Time: {{event.time}}</div>
        <div> Registration: {{event.Registration}}</div>
        <span>Location: {{event.location.address}}</span>
        <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
      </div>
        </div>
    `,
  styles: [`
      .pad-left { margin-left: 10px; }
      .well div { color: auto; }
      `
  ]
})
export class EventThumbnailComponent {
  @Input() event: any


}
