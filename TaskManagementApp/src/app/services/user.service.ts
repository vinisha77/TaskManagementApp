import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService
{
  private controllerUrl = environment.apiServer + '/api/user';
  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]>
  {
    return this.http.get<User[]>(this.controllerUrl).pipe();
  }

  getUser(id: number): Observable<User>
  {
    return this.http.get<User>(this.controllerUrl + "/" + id).pipe();
  }

  createUser(task: User): Observable<User>
  {
    return this.http.post<User>(this.controllerUrl, task).pipe();
  }

  updateUser(task: User): Observable<boolean>
  {
    return this.http.put<boolean>(this.controllerUrl + "/" + task.id, task).pipe();
  }

  deleteUser(id: number): Observable<boolean>
  {
    return this.http.delete<boolean>(this.controllerUrl + "/" + id).pipe();
  }
}
