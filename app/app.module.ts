/**
 * Created by erupare on 18/06/2017.
 */
import {NgModule, LOCALE_ID} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {HttpModule} from '@angular/http'
import {RouterModule}  from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    UpvoteComponent,
    VoterService,
    LocationValidator,
    DurationPipe
} from './events/index'
import {EventsAppComponent} from './events-app.component'
import {NavBarComponent} from './nav/navbar.component'
import {
    TOASTR_TOKEN,
    Toastr,
    JQ_TOKEN,
    CollapsibleWellComponent,
    ModalTriggerDirective,
    SimpleModalComponent
}  from './common/index'
import {appRoutes} from './routes'
import {Error404Component} from './errors/404.component'
import {AuthService} from './user/auth.service'
import {UpvoteComponent} from "./events/event-details/upvote.component";

// declare let toastr:any
declare let toastr:Toastr;
declare let jQuery:Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
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
        SessionListComponent,
        CollapsibleWellComponent,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent,
        LocationValidator,
        DurationPipe
    ],
    providers: [
        EventService,
        {provide: TOASTR_TOKEN, useValue: toastr},
        {provide: JQ_TOKEN, useValue: jQuery},
        EventRouteActivator,
        EventListResolver,
        AuthService,
        VoterService,
        {provide: LOCALE_ID, useValue: "en-GB"}, //replace "en-US" with your locale
        { // We use this long method for Functions and shorthand above for Services
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}

function checkDirtyState(component:CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
}