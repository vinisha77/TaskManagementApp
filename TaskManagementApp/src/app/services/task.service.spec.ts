import { inject, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TaskService } from './task.service';
import { Task } from '../models/task';
import { lastValueFrom } from 'rxjs';
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

  describe('getTasks', () => {
    it('should return an array of tasks', inject([HttpClient], async (http) => {
      const service = new TaskService(http);
      // TODO: Implement test
      
      const response = await lastValueFrom(service.getTasks());

      // Log response for debugging purposes
      console.log('Fetched tasks:', response);

      // Assert: Verify the response is an array
      expect(Array.isArray(response)).toBeTrue();
      expect(response.length).toBeGreaterThan(0); 
      
    }));
  });

  describe('getTask', () => {
    it('should return a single task', inject([HttpClient], async (http) => {
      const service = new TaskService(http);
      const taskId = 1; // Assuming task with ID 1 exists in the system

      // Act: Call the getTask method
      const response = await lastValueFrom(service.getTask(taskId));

      // Log response for debugging purposes
      console.log('Fetched task:', response);

      
      expect(response).toBeTruthy();  
      expect(response.id).toBe(taskId);  
    }));
  });

  describe('createTask', () => {
    it('should create a task and return true', inject([HttpClient], async (http) => {
      const service = new TaskService(http);
      const mockTask: Task = {
        id: 0, 
        title: 'Integration Test Task',
        description: 'This is a test task',
        createdDate: '2025-02-07',
        dueDate: '2025-02-10',
        isCompleted: false,
        user: 'Vaishali'
      };

      
      const response = await lastValueFrom(service.createTask(mockTask));
        console.log('###########Task created successfully:', response);
        expect(response).toBeTrue();
      
    }));
  });


  describe('updateTask', () => {
    it('should update a task and return true', inject([HttpClient], async (http) => {
      const service = new TaskService(http);
      const updatedTask: Task = {
        id: 1, // Assuming task with ID 1 exists in the system
        title: 'Updated Task',
        description: 'This is an updated test task',
        createdDate: '2025-02-07',
        dueDate: '2025-02-12',
        isCompleted: true,
        user: 'Vaishali'
      };

      
        // Act: Call the updateTask method
        const response = await lastValueFrom(service.updateTask(updatedTask));

        // Log response for debugging purposes
        console.log('Task updated successfully:', response);

        expect(response).toBeTrue();
        fail('API call failed during updateTask test'); 
      
    }));
  });

  describe('deleteTask', () => {
    it('should delete a task and return true', inject([HttpClient], async (http) => {
      const service = new TaskService(http);
      const taskId = 1; // Assuming task with ID 1 exists in the system

      
        // Act: Call the deleteTask method
        const response = await lastValueFrom(service.deleteTask(taskId));

        // Log response for debugging purposes
        console.log('Task deleted successfully:', response);
        expect(response).toBeTrue();
      
    }));
  });

});
