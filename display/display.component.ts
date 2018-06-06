import { Component } from '@angular/core';

import { SharedComponent } from '../shared/shared.component';
@Component ({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['../shared/style.css']
})

export class DisplayComponent {
    computed: string;
    history: string;

    public getComputedValue() {
        this.computed = SharedComponent.prototype.getComputedExp();
        this.history = SharedComponent.prototype.getHistory();
        //console.log(`notifying from display! the value of computed: ` + this.computed +
       // `\n the value of history: ` + this.history);
    }
}
