/**
 * Created by erupare on 05/07/2017.
 */

import {Component, Input, OnChanges} from '@angular/core'
import { ISession } from "../shared/index";


@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html',
    styles: ['collapsible-well h6 {margin-top:-5px; margin-bottom:10px }'],
})

export class SessionListComponent implements OnChanges {
    @Input()
    sessions:ISession[];
    @Input()
    filterBy:string;
    visibleSessions:ISession[] = [];

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
        }
    }

    filterSessions(filter) {
        console.log("filter : " + filter);

        if (filter === 'all') {

            // console.log("this.sessions.slice(0) : " + this.sessions.slice(0))
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            })
        }
    }
}