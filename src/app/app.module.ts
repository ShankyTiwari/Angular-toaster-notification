import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule } from 'angular2-toaster';

import { AppComponent } from './app.component';
import { ToasterComponentModule } from './toaster.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    ToasterComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
