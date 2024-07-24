import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TasksService } from '../../../services/tasks.service';
import { Task } from '../../../models/task';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {
  public tasks: Task[]=[];

  private loadTasks(){
  this.tasksService.getTasks().subscribe((data)=>{
    this.tasks=data;
    });
  }

  constructor (private tasksService:TasksService){
    this.loadTasks();
  }

  public taskSubmit(form:NgForm){
  console.log(form.form.value);
  this.tasksService.addTask(form.form.value).subscribe((data)=>{
    this.loadTasks();
    form.resetForm();
  })
}
  public deleteTask(id:string){
    this.tasksService.deleteTask(id).subscribe((data)=>{
      this.loadTasks();
    })
  }

}
