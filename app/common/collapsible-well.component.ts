/**
 * Created by erupare on 05/07/2017.
 */

import {Component, Input} from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <h4 class="well-title">{{title}}</h4>
        <!--content projection goes here-->
        <ng-content *ngIf="visible"></ng-content>
        
     </div>
    `
})

export class CollapsibleWellComponent {
    @Input()
    title:string;
    visible:boolean = true;

    toggleContent() {
        this.visible = !this.visible;
    }
}