import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListComponent } from './to-do-list.component';
import { of } from 'rxjs';
import { ToDoService } from 'src/app/services/to-do-service.service';

describe('ToDoListComponent', () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;

  let serviceStub: any;

  beforeEach(async(() => {
    serviceStub = {
      getList: () => of([{
        "id": 1,
        "label": "Kitchen Cleanup",
        "description": "Clean my dirty kitchen",
        "category": "house",
        "done": false,
        "editing": false
      },
      {
        "id": 2,
        "label": "Taxes!",
        "description": "Start doing my taxes and contact my accountant jhon for advice",
        "category": "bureaucracy",
        "done": "14-12-2020",
        "editing": false
      }]),
    };

    TestBed.configureTestingModule({
      declarations: [ ToDoListComponent ],
      providers: [ {provide: ToDoService, useValue: serviceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show tasks', () => {
    expect(component.getList()).toBe([{
      "id": 1,
      "label": "Kitchen Cleanup",
      "description": "Clean my dirty kitchen",
      "category": "house",
      "done": false,
      "editing": false
    },
    {
      "id": 2,
      "label": "Taxes!",
      "description": "Start doing my taxes and contact my accountant jhon for advice",
      "category": "bureaucracy",
      "done": "14-12-2020",
      "editing": false
    }]);
  });
});
