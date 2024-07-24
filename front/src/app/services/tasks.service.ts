import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  public getTasks(){
    return this.http.get<Task[]>('http://localhost:3000/tasks/');
  }

  public getTask(id:number) {
    return this.http.get<Task>('http://localhost:3000/tasks/'+id);
  }

  public addTask(task:Task){
    return this.http.post('http://localhost:3000/tasks/', task);
  }

  public updateTask(task:Task){
    return this.http.put('http://localhost:3000/tasks/', task);
  }

  public deleteTask(id:string){
    return this.http.delete('http://localhost:3000/tasks/'+id);
  }
}
