import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
    .container{
      margin: 10px;
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  logout(){
    //ir al backend
    /* Confirmar que el usuario existe */
    /*Navegar a la pantalla de heroes */

    this.router.navigate(['./auth/login']);
  }

}
