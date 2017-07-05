/**
 * Created by erupare on 18/06/2017.
 */
import {NgModule, LOCALE_ID} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
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
    DurationPipe
} from './events/index'
import {EventsAppComponent} from './events-app.component'
import {NavBarComponent} from './nav/navbar.component'
import {TOASTR_TOKEN, Toastr}  from './common/toastr.service'
import {CollapsibleWellComponent} from './common/collapsible-well.component'
import {appRoutes} from './routes'
import {Error404Component} from './errors/404.component'
import {AuthService} from './user/auth.service'

// declare let toastr:any
declare let toastr:Toastr

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
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe
    ],
    providers: [
        EventService,
        {provide: TOASTR_TOKEN, useValue: toastr},
        EventRouteActivator,
        EventListResolver,
        AuthService,
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