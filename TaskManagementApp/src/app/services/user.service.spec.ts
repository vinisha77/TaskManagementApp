import { inject, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { UserService } from './user.service';
import { User } from '../models/user';
import { of } from 'rxjs';

// Please complete the following integration tests for UserService

describe('UserService', () =>
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

  /*describe('getUsers', () =>
  {
    it('should return an array of users', (inject([HttpClient], async (http) =>
    {
      const service = new UserService(http);
      // TODO: Implement test

    });
  });*/
  describe('getUser', () =>
  {
    it('should return a single user', (inject([HttpClient], async (http) =>
    {
      const service = new UserService(http);
      // TODO: Implement test

    const userId = 8; // Assuming user with ID 1 exists in the database
    service.getUser(userId).subscribe(user => {
      console.log('******** Retrieved User:', user); 

      expect(user).toBeTruthy();
      expect(user.id).toBe(userId);
      expect(user.username).toBeDefined();
      expect(user.email).toContain('@'); 
    });
  })));
});
    

  describe('createUser', () =>
  {
    it('should return the new user', (inject([HttpClient], async (http) =>
    {
      const service = new UserService(http);
      // TODO: Implement test

      const mockUser: User = { id: 10, username: 'Vinay', password: 'password123', email: 'vinay@example.com' };

      // Mocking the HTTP POST call
      spyOn(http, 'post').and.returnValue(of(mockUser));

      service.createUser(mockUser).subscribe(user => {
        expect(user).toEqual(mockUser);
      });
    })));
  });

   

  describe('updateUser', () =>
  {
    it('should return true', (inject([HttpClient], async (http) =>
    {
      const service = new UserService(http);
      // TODO: Implement test
      const mockUser: User = { id: 8, username: 'Vinshu', password: 'password123', email: 'vinay@example.com' };

      // Mocking the HTTP PUT call
      spyOn(http, 'put').and.returnValue(of(true));

      service.updateUser(mockUser).subscribe(response => {
        expect(response).toBeTrue();
      });
    })));
  });

   

  describe('deleteUser', () =>
  {
    it('should return true', (inject([HttpClient], async (http) =>
    {
      const service = new UserService(http);
      // TODO: Implement test

      const userId = 9;

      spyOn(http, 'delete').and.returnValue(of(true));

      // Call the deleteUser method and test
      service.deleteUser(userId).subscribe(response => {
        expect(response).toBeTrue();
      });
  }))); 
  });
  
});
