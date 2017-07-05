/**
 * Created by erupare on 05/07/2017.
 */

import {Component, Input} from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
         <!--title tag content projection goes here-->
        <h4>
            <ng-content select="[well-title]"></ng-content>
        </h4>
        <!--boby tag content projection goes here-->
        <ng-content *ngIf="visible" select="[well-body]"></ng-content>
        
     </div>
    `
})

export class CollapsibleWellComponent {
    visible:boolean = true;

    toggleContent() {
        this.visible = !this.visible;
    }
}