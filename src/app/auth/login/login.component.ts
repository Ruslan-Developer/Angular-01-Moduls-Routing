import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //Inyectar el servicio de router nos permite navegar entre modulos
  constructor(private router: Router) { }

  navigateToTasksList(){

    this.router.navigate(['/tasks'])

  }

}
