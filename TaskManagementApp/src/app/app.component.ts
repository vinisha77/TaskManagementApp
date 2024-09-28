import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TaskService } from './services/task.service';
import { UserService } from './services/user.service';
import { Task } from './models/task';
import { User } from './models/user';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'; // NOTE: if mat-form-field is used, MatInputModule should also be imported.
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS, MatNativeDateModule, MatOptionSelectionChange } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { SnackbarService } from './services/snackbar.service';
export enum SnackbarMessageOptions
{
  Success = "success",
  Info = "info",
  Error = "error"
}
@Component({
  selector: 'app-root',
  standalone: true,
  providers: [TaskService, UserService, SnackbarService],
  imports: [RouterOutlet, ReactiveFormsModule, MatCardModule, MatTooltipModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule, MatRadioModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
{
  currentYear = (new Date()).getFullYear();
  tasks: Task[];
  users: User[];

  // new task fields
  title: string = "";
  description: string = "";
  dueDate: Date = new Date();
  assignedUser: string = "";

  // new user fields
  userName: string;
  email: string;
  password: string;
  constructor(private taskService: TaskService, private userService: UserService, private snackBar: SnackbarService) { }
  async ngOnInit()
  {
    await this.taskService.getTasks().toPromise().then(data => this.tasks = data);
    await this.userService.getUsers().toPromise().then(data => this.users = data);
  }

  deleteTask(id: number)
  {
    this.taskService.deleteTask(id).toPromise().then(isDeleted =>
    {
      if (isDeleted)
      {
        this.tasks = this.tasks.filter(t => t.id != id);
      }
    });

  }

  addTask()
  {
    let task = new Task(0, this.title, this.description, this.createNiceDate((new Date())), this.createNiceDate(new Date(this.dueDate)), false, this.assignedUser);
    this.taskService.createTask(task).toPromise().then(isCreated =>
    {
      if (isCreated)
      {
        this.tasks.push(task);
      }
    });
  }

  async updateTask(task: Task)
  {
    await this.taskService.updateTask(task).toPromise().then(isUpdated =>
    {
    });
  }

  addUser()
  {
    let user = new User(0, this.userName, this.password, this.email);
    this.userService.createUser(user).toPromise().then(async newUser =>
    {
      if (newUser)
      {
        this.users.push(user);
        await this.userService.getUsers().toPromise().then(data => this.users = data);
      }
    });
  }

  deleteUser(id: number)
  {
    if (this.tasks.find(t => t.user == this.users.find(u => u.id == id).username))
    {
      this.snackBar.open("Cannot delete user because they have tasks assigned to them.", SnackbarMessageOptions.Error);
      return;
    }
    this.userService.deleteUser(id).toPromise().then(isDeleted =>
    {
      if (isDeleted)
      {
        this.users = this.users.filter(u => u.id != id);
      }
    });
  }

  createNiceDate(t: Date)
  {
    const time = t.getHours().toString().padStart(2, "0") + ":" + t.getMinutes().toString().padStart(2, "0") + ":" + t.getSeconds().toString().padStart(2, "0");
    return t.getFullYear() + "-" + (t.getMonth() + 1).toString().padStart(2, "0") + "-" + t.getDate().toString().padStart(2, "0") + " " + time;
  }
}
