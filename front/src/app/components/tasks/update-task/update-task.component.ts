import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent {
    public todo:string = '';
    public status?:string ='';
    public _id?:string

  
    constructor (private route:ActivatedRoute, private router:Router, private tasksService:TasksService){
      this.tasksService.getTask(this.route.snapshot.params['id']).subscribe({
        next:(task)=>{
      this.todo=task.todo;
      this.status=task.status;
      this._id=task._id
    },
    error:(error)=>  {
      console.log(error);
    }
  })
}
    public taskSubmit(form:NgForm){
    console.log(form.form.value);
    this.tasksService.updateTask(this.route.snapshot.params['id'], form.form.value).subscribe({
      next:(data)=>{
        this.router.navigate(['tasks']);
      },
      error:(error)=>{
     console.log(error.error.text);
    }
    })
  }
}
