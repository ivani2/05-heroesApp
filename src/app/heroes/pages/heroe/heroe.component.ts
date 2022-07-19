import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroeId!: string;
  constructor( private activatedRoute: ActivatedRoute ) { }

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
  this.activatedRoute.params
  .subscribe( ({ id }) => {
    this.heroeId = id;
    console.log(this.heroeId);
  } );


  }

}
