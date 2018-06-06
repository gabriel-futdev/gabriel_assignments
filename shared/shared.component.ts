import { Component } from '@angular/core';
import { DisplayComponent } from '../display/display.component';
import { FuncButtonsComponent } from '../funcbuttons/funcbuttons.component';


export class SharedComponent {
    computed: string;
    history: string;

    public getComputedExp(): string {
        return this.computed;
    }
    public getHistory(): string {
        return this.history;
    }

    public setComputedExp(input: string): void {
        this.computed = input;
    }
    public setHistory(input: string): void {
        this.history = input;
    }
}
