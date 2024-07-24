import { Routes } from '@angular/router';
import { TasksListComponent } from './components/tasks/tasks-list/tasks-list.component';
import { UpdateTaskComponent } from './components/tasks/update-task/update-task.component';

export const routes: Routes = [
    {path:"tasks/:id",component:UpdateTaskComponent},
    {path:"tasks",component:TasksListComponent},
];
