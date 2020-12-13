import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ToDo } from '../interfaces/to-do';

@Injectable({
  providedIn: 'root'
})

export class ToDoServiceService {

  readonly _serviceUrl: string = "http://localhost:3000/tasks"

  constructor(private _http: HttpClient) { }

  getList(): Observable<ToDo[]> {
    return this._http.get<ToDo[]>(this._serviceUrl);
  }
}
