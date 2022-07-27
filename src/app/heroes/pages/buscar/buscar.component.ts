import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {


  termino: string = "";
  heroes: Heroe[] = [];
  heroeSeleccionado!: Heroe | undefined;
  sinResultados: boolean = true;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heroesService.getSugerencias( this.termino.trim() )
    .subscribe( heroes => this.heroes =  heroes );
    console.log( "Longitud del arreglo de la busqueda: ", this.heroes.length );
  }

  opcionSeleccionada(evento: MatAutocompleteSelectedEvent){
    // console.log( evento );
    
    console.log( evento.option.value );
    if( !evento.option.value ){
      this.heroeSeleccionado = undefined;
      return;
    }
    const heroe: Heroe = evento.option.value;
    this.termino = heroe.superhero;
    this.heroesService.getHeroePorId( heroe.id! )
    .subscribe( heroe => this.heroeSeleccionado = heroe );

  }

}
