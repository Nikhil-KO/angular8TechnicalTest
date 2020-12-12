import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoServiceService } from './services/to-do-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    ToDoServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
