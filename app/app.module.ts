import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DisplayModule } from '../display/display.module';
import { FuncButtonsModule } from '../funcbuttons/funcbuttons.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MaterialModule, DisplayModule, FuncButtonsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
