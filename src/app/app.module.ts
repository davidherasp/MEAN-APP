import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AppGuidesComponent }  from './app.guides.component';
import { AppContainerComponent }  from './app.container.component';
import { AppDetailGuideComponent }  from './app.detail.guide.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing ],
  declarations: [ AppComponent, GuidesComponent, ContainerComponent, DetailGuideComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
