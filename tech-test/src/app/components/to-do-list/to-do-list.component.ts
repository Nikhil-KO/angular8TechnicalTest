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
  public newTask: IToDo;

  constructor(private _service : ToDoServiceService) { }
  
  ngOnInit() {
    this._service.getList().subscribe(data => this._toDo = data);
    this.newTask = {} as IToDo;
    this.newTask.done = false;
    this.newTask.id = null;
    this.cancelNew();
  }

  getList(): IToDo[] {
    return this._toDo;
  }

  alertUser(msg: string): void {
    alert(msg);
  }

  cancelNew(): void {
    this.newTask.label = "";
    this.newTask.description = "";
    this.newTask.category = "";
  }

  addTask(): void {
    if (this.newTask.label === "") {
      this.alertUser("Please provide atleast a label for the task");
      return;
    }
    this._service.addTask(this.newTask).subscribe(res => {
      this._toDo.push(res);
    }, error => {
      this.alertUser("Failed to add new task");
    });
  }

  markDoneTask(todo: IToDo):void {
    let id: number = todo.id
    this._service.markDone(id).subscribe(res => {
      todo.done = res.done;
    }, error => {
      this.alertUser("Something went wrong marking task as complete");
    });    
  }

  // delete a completed task
  deleteTask(todo: IToDo): void {
    this._service.deleteTask(todo.id).subscribe(res => {
      const index = this._toDo.indexOf(todo);
      if (index > -1)
        this._toDo.splice(index, 1);
    }, error => {
      this.alertUser("Failed to delete task, please try again");
    })
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
      this.alertUser("Something went wrong unmarking task");
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
      this.alertUser("Failed to update task");
    });
  }

  testFunction() {
    console.log("ok");
    console.log(this._toDo[0].hidden);
    this._toDo[0].hidden = this._toDo[0].hidden ? false : true;
    console.log(this._toDo[0].hidden);

  }
}
