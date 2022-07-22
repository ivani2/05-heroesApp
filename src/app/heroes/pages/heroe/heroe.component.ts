import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Heroe } from '../../interfaces/heroes.interface';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
    img{
      width: 100%;
      border-radius: 10px;
    }
    `
  ]
})
export class HeroeComponent implements OnInit {

  heroeId!: string;
  heroe! : Heroe;
  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router          
    ) { }

  ngOnInit(): void {
   

  // console.log(this.activatedRoute.params);
  //   this.activatedRoute.params.subscribe(
  //   {
  //     next: (id) => {
  //       tap(console.log);
  //     }
  //   }
  //  );
  // this.activatedRoute.params
  //     .pipe( 
  //       tap( console.log )
  //     ) 
  //     .subscribe( id => this.heroeId = id );


  // this.activatedRoute.params
  // .subscribe( ({ id }) => {
  //   this.heroeId = id;
  //   console.log(this.heroeId);
  // } );

  this.activatedRoute.params
  .subscribe( ({ id }) => {
    this.heroeId = id;
    console.log(this.heroeId);
  } );

  this.activatedRoute.params
      .pipe( 
        switchMap ( ({ id })  => this.heroesService.getHeroePorId( id ) ),
      ) 
      .subscribe( heroe => this.heroe = heroe );


  }

  regresar (): void{
    this.router.navigate(['/heroes/listado']);
  }

}
