import { Component, OnInit } from '@angular/core';
import { ToDoServiceService } from '../../services/to-do-service.service'
import { ToDo } from '../../interfaces/to-do'

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})

export class ToDoListComponent implements OnInit {

  private _toDo: ToDo[];
  
  constructor(private _service : ToDoServiceService) { }
  
  ngOnInit() {
    this._service.getList().subscribe(data => this._toDo = data);
  }

  getList(): ToDo[] {
    return this._toDo;
  }

  addTask(newTask: ToDo): void {
    console.log(newTask);
  }

  // delete a completed task
  deleteTask(id: number): void {
    console.log(id);
  }

  // mark completed task as todo
  undoTask(id: number): void {
    console.log(id)
  }

  // update a key for given task id
  updateTask(id: number, key: string, update: any): void {
    console.log(id, key, update);
  }

  testFunction() {
    console.log("ok");
    console.log(this._toDo[0].hidden);
    this._toDo[0].hidden = this._toDo[0].hidden ? false : true;
    console.log(this._toDo[0].hidden);

  }
}
