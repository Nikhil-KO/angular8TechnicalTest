import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoService } from './services/to-do-service.service';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClient,
    ToDoService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
