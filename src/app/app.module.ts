import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBoundComponent } from './data-bound/data-bound.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './events-list/event-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBoundComponent,
    HomeComponent,
    ChildComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
