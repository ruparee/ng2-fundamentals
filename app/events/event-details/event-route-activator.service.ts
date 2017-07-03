/**
 * Created by erupare on 03/07/2017.
 */

import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router"
import { Injectable } from "@angular/core"
import { EventService}  from "../shared/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService:EventService , private router:Router) {

    }

    canActivate(route:ActivatedRouteSnapshot) {
        /** !! casts result to Boolean **/
        const eventExists = !!this.eventService.getEvent(+route.params['id'])

        // console.log("eventExists : " + eventExists)

        // console.log(+route.params['id'])

        // console.log(this.eventService.getEvent(2))

        // console.log(this.eventService.getEvent(+route.params['id']))

        // console.log(!!this.eventService.getEvent(+route.params['id'])

        if(!eventExists) {
            this.router.navigate(['/404'])
        }

        return eventExists
    }

}