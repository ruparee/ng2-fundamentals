import { Component, Input } from '@angular/core'
import { IEvent } from './shared/index'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <!-- <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div> -->
        <!-- <div [style.color]="event?.time === '8:00 am' ? '#003300' : '#bbb'" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div> -->
         <!-- <div [ngStyle]="{'color': event?.time === '8:00 am' ? '#003300' : '#bbb', 'font-weight': event?.time === '8:00 am' ? 'bold' : 'normal'}" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div> -->
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            Online Url: {{event?.onlineUrl}}
        </div>
    </div>
    `,
    styles: [`
       .green { color: #003300 !important; }
       .bold { font-weight: bold; }
       .thimbnail{ min-height: 210px; }
       .pad-left { margin-left: 10px;}
       .well div { color: #bbb }
    `]
})

export class EventThumbnailComponent {
   // @Input() event: any
    @Input() event:IEvent

// Here we return an object ....
//    getStartTimeClass(){
//        const isEarlyStart = this.event && this.event.time === '8:00 am'
//        return {green: isEarlyStart, bold: isEarlyStart}
//    }

// Here we return a String
//  getStartTimeClass(){
//        if(this.event && this.event.time === '8:00 am')
//              return 'green bold'
//        return ' '
//    }

// Here we return an Array
//  getStartTimeClass(){
//        if(this.event && this.event.time === '8:00 am')
//              return ['green' , 'bold']
//        return []  // return an empty array
//  }

     getStartTimeStyle():any{ // We use 'any' to satisfy TypeScript because the 2 objects we are returning are of different shapes
       if(this.event && this.event.time === '8:00 am')
             return {color: '#003300' , 'font-weight': 'bold'}
       return {}  
}

}