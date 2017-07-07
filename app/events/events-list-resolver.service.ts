/**
 * Created by erupare on 03/07/2017.
 */

import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import {EventService} from "./shared/event.service";

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService:EventService) {

    }
    resolve() {
        return this.eventService.getEvents()
    }
}
