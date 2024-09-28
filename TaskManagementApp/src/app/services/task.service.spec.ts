import { inject, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TaskService } from './task.service';

// Please complete the following integration tests for TaskService

describe('TaskService', () =>
{

  beforeEach((async () =>
  {

    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HttpClientModule
      ],
      providers: [HttpClientModule]
    }).compileComponents();

  }));

  describe('getTasks', () =>
  {
    it('should return an array of tasks', (inject([HttpClient], async (http) =>
    {
      const service = new TaskService(http);
      // TODO: Implement test

    })));
  });

  describe('getTask', () =>
  {
    it('should return a single task', (inject([HttpClient], async (http) =>
    {
      const service = new TaskService(http);
      // TODO: Implement test

    })));
  });

  describe('createTask', () =>
  {
    it('should return true', (inject([HttpClient], async (http) =>
    {
      const service = new TaskService(http);
      // TODO: Implement test

    })));
  });

  describe('updateTask', () =>
  {
    it('should return true', (inject([HttpClient], async (http) =>
    {
      const service = new TaskService(http);
      // TODO: Implement test

    })));
  });

  describe('deleteTask', () =>
  {
    it('should return true', (inject([HttpClient], async (http) =>
    {
      const service = new TaskService(http);
      // TODO: Implement test

    })));
  });

});
