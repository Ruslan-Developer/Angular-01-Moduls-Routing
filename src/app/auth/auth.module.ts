import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

//Paso: 02 -> Define las rutas hijas para el módulo de autenticación
const routes: Routes = [
  {
    path: '', 
    component: LoginComponent //Cargar el componente de login
  }
]


@NgModule({
  declarations: [
    LoginComponent //Componente que se va a cargar en la ruta
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) //Permite que la aplicacion pueda navegar entre las rutas hijas
  ]
})
export class AuthModule { }
