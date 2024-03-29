import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor( private router: Router, 
               private authService: AuthService
    ) { }

  login(){
    //ir al backend
    /* Confirmar que el usuario existe */
    /*Navegar a la pantalla de heroes */

    // this.router.navigate(['./heroes']);

    this.authService.login()
    .subscribe( resp => { 
      console.log(resp); 

      if( resp.id ){
        this.router.navigate(['./heroes']);
      }
    } );


  }

  ingresarSinLogin() {
    this.authService.logout();
    this.router.navigate([ './heroes' ]);
  }

}
