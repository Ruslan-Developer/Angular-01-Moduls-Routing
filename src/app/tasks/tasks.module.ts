import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { RouterModule, Routes } from '@angular/router';

// Indicamos que la ruta raiz de este modulo es TasksListComponent
const routes: Routes = [
  {
    path: '',
    component: TasksListComponent //Cargar el componente de lista de tareas
  }
];

@NgModule({
  declarations: [
    TasksListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) //Nos permite cargar las rutas hijas
  ]
})
export class TasksModule { }
