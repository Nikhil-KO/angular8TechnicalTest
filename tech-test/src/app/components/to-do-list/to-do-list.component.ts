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

  getList() : ToDo[] {
    return this._toDo;
  }

  ngOnInit() {
    this._service.getList().subscribe(data => this._toDo = data);
  }

}
