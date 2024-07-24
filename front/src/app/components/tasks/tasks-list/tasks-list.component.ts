import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../../services/tasks.service';
import { Task } from '../../../models/task';


@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
}
