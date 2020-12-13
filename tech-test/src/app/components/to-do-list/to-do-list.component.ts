import { Component, OnInit } from '@angular/core';
import { ToDoServiceService } from '../../services/to-do-service.service'
import { ToDo } from '../../interfaces/to-do'

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})

export class ToDoListComponent implements OnInit {

  private _toDoList: ToDo[];

  constructor(service : ToDoServiceService) {
    this._toDoList = service.getList();
  }

  getList() {
    return this._toDoList;
  }

  ngOnInit() {
  }

}
