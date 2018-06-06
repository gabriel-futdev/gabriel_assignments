import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FuncButtonsComponent } from './funcbuttons.component';

import { MaterialModule } from '../app/material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule, MaterialModule, BrowserAnimationsModule
  ],
  exports: [FuncButtonsComponent],
  declarations: [FuncButtonsComponent]
})
export class FuncButtonsModule {
}
