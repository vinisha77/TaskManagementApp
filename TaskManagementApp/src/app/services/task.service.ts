import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService
{
  private controllerUrl = environment.apiServer + '/api/task';
  constructor(private http: HttpClient) { }
  getTasks(): Observable<Task[]>
  {
    return this.http.get<Task[]>(this.controllerUrl).pipe();
  }

  getTask(id: number): Observable<Task>
  {
    return this.http.get<Task>(this.controllerUrl + "/" + id).pipe();
  }

  createTask(task: Task): Observable<boolean>
  {
    return this.http.post<boolean>(this.controllerUrl, task).pipe();
  }

  updateTask(task: Task): Observable<boolean>
  {
    return this.http.put<boolean>(this.controllerUrl + "/" + task.id, task).pipe();
  }

  deleteTask(id: number): Observable<boolean>
  {
    return this.http.delete<boolean>(this.controllerUrl + "/" + id).pipe();
  }
}
