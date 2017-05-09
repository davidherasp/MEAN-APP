import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { GuideComponent }  from './guide.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing ],
  declarations: [ AppComponent, GuideComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
