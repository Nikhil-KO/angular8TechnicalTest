import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IToDo } from '../interfaces/to-do';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})

export class ToDoServiceService {

  readonly _serviceUrl: string = "http://localhost:3000/tasks"
  readonly headers: HttpHeaders = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

  constructor(private _http: HttpClient, private _datePipe: DatePipe) { }

  getList(): Observable<IToDo[]> {
    return this._http.get<IToDo[]>(this._serviceUrl);
  }

  markDone(id: number): Observable<IToDo> {
    let doneDate = this._datePipe.transform(new Date(), 'dd-MM-yyyy');
    let url: string = this._serviceUrl + "/" + id ;
    let param: string = JSON.stringify({"done": doneDate});
    return this._http.patch<IToDo>(url, param, {headers: this.headers});
  }

  addTask(newTask: IToDo): Observable<IToDo> {
    let param: string = JSON.stringify(newTask);
    console.log(param);
    return this._http.post<IToDo>(this._serviceUrl, param, {headers: this.headers});
  }

  undoTask(id:number): Observable<IToDo> {
    let url: string = this._serviceUrl + "/" + id;
    let param: string = JSON.stringify({"done": false});
    return this._http.patch<IToDo>(url, param, {headers: this.headers});
  }

  updateTask(task: IToDo): Observable<IToDo> {
    let url: string = this._serviceUrl + "/" + task['id'];
    let param: string = JSON.stringify(task);
    return this._http.patch<IToDo>(url, param, {headers: this.headers});
  }
}
