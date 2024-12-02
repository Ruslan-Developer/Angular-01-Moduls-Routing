import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';

// Paso: 01 -> Definir las rutas de la aplicacion (URLs) y a que modulo redirigir, indicamos nombre de nuestros modulos

const routes: Routes = [
  {
    path: '', //Es como acceder a la raiz de la aplicacion
    loadChildren: () => AuthModule //Acceder al modulo de autenticacion

  },
  {
    path: 'tasks', //Indica la ruta de acceso a las tareas
    loadChildren: () => TasksModule //Acceder al modulo de tareas
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)], //Permite que la aplicacion pueda navegar entre las rutas
  exports: [RouterModule]
})
export class AppRoutingModule { }
