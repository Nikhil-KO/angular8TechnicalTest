import { TestBed } from '@angular/core/testing';

import { ToDoServiceService } from './to-do-service.service';

describe('ToDoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToDoServiceService = TestBed.get(ToDoServiceService);
    expect(service).toBeTruthy();
  });
});
