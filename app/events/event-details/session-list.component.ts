/**
 * Created by erupare on 05/07/2017.
 */

import {Component, Input, OnChanges, LOCALE_ID} from '@angular/core'
import { ISession } from "../shared/index";
import {AuthService} from '../../user/auth.service'
import {VoterService} from './voter.service'


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
    @Input()
    sortBy:string;
    visibleSessions:ISession[] = [];

    constructor(private auth:AuthService, private voterService:VoterService) {
    }

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc)
                : this.visibleSessions.sort(sortByVotesDesc)
        }
    }

    toggleVote(session:ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(session,
                this.auth.currentUser.userName);
        } else {
            this.voterService.addVoter(session,
                this.auth.currentUser.userName);
        }

        if (this.sortBy === 'votes')
            this.visibleSessions.sort(sortByVotesDesc);
    }

    userHasVoted(session:ISession) {
        return this.voterService.userHasVoted(session,
            this.auth.currentUser.userName);
    }

    filterSessions(filter) {
        // console.log("filter : " + filter);

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

// Putting the sorting functions outside the class because they are stateless
// and don't need to be part of a class.

function sortByNameAsc(s1:ISession, s2:ISession) {
    if (s1.name > s2.name) return 1
    else if (s1.name === s2.name) return 0
    else return -1
}

function sortByVotesDesc(s1:ISession, s2:ISession) {
    return s2.voters.length - s1.voters.length;
}