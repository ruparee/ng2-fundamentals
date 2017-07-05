/**
 * Created by erupare on 18/06/2017.
 */
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule }  from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent
} from './events/index'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { ToastrService }  from './common/toastr.service'
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'


// import { EventsAppComponent } from './events-app.component'
// import { EventsListComponent } from './events/events-list.component'
// import { EventThumbnailComponent } from
//     './events/event-thumbnail.component'
// import  { NavBarComponent } from './nav/navbar.component'
// import { EventService } from './events/shared/event.service'
// import { ToastrService }  from './common/toastr.service'
// import { EventDetailsComponent } from './events/event-details/event-details.component'
// import { appRoutes } from './routes'
// import { CreateEventComponent } from './events/create-event.component'
// import { Error404Component } from './errors/404.component'
// import { EventRouteActivator } from './events/event-details/event-route-activator.service'
// import { EventListResolver } from './events/events-list-resolver.service'



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [EventsAppComponent, 
                   EventsListComponent,
                   EventThumbnailComponent,
                   EventDetailsComponent,
                   NavBarComponent,
                   CreateEventComponent,
                   Error404Component,
                   CreateSessionComponent,
                   SessionListComponent
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        EventListResolver,
        AuthService,
        { // We use this long method for Functions and shorthand above for Services
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule{

}

function checkDirtyState (component:CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
}