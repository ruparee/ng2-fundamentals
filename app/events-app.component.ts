/**
 * Created by erupare on 18/06/2017.
 */
import { Component } from '@angular/core'

@Component({
    selector: 'events-app',
    template: `
        <nav-bar></nav-bar>
        <!--<event-list></event-list>-->
        <router-outlet></router-outlet>
    `
})
export class EventsAppComponent {

}