import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksListComponent } from './components/tasks/tasks-list/tasks-list.component';
import { UpdateTaskComponent } from './components/tasks/update-task/update-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}
