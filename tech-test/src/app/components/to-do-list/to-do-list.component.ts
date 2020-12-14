import { Component, OnInit } from '@angular/core';
import { IToDo } from '../../interfaces/to-do'
import { ToDoServiceService } from '../../services/to-do-service.service'

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})

export class ToDoListComponent implements OnInit {

  private _toDo: IToDo[];
  
  constructor(private _service : ToDoServiceService) { }
  
  ngOnInit() {
    this._service.getList().subscribe(data => this._toDo = data);
  }

  getList(): IToDo[] {
    return this._toDo;
  }

  addTask(newTask: IToDo): void {
    console.log(newTask);
  }

  markDoneTask(todo: IToDo):void {
    let id: number = todo.id
    this._service.markDone(id).subscribe(res => {
      todo.done = res.done;
    }, error => {
      alert("Something went wrong marking task as complete");
    });    
  }

  // delete a completed task
  deleteTask(id: number): void {
    console.log(id);
  }

  // mark completed task as todo
  undoTask(id: number): void {
    this._service.undoTask(id).subscribe(res => {
      this._toDo.forEach(element => {
        if (element.id === id) {
          element.done = res.done;
        }
      });
    }, error => {
      alert("Something went wrong unmarking task");
    });  
  }

  editToDo(todo: IToDo, state: boolean) {
    todo.editing = state;
    if (!state) {
      this.updateTask(todo);
    }    
  }

  // update a key for given task id
  updateTask(todo: IToDo): void {
    console.log(todo);
    this._service.updateTask(todo).subscribe(res => {
      todo = res;
    }, error => {
      alert("Failed to update task");
    });
  }

  testFunction() {
    console.log("ok");
    console.log(this._toDo[0].hidden);
    this._toDo[0].hidden = this._toDo[0].hidden ? false : true;
    console.log(this._toDo[0].hidden);

  }
}
