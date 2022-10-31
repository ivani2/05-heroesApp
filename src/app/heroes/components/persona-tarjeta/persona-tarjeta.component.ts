import { Component, Input } from '@angular/core';
import { Persona } from '../../interfaces/personas.interface';
import { PersonaService } from '../../services/personas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persona-tarjeta',
  templateUrl: './persona-tarjeta.component.html',
  styles: [
    `
  mat-card{
    margin-top: 20px;
  }
  `
  ]
})
export class PersonaTarjetaComponent {

@Input() persona!: Persona;

constructor( private personaService: PersonaService,
  private activatedRoute: ActivatedRoute
  ){

}

borrarPersona( id: Number ):void{
  console.log( id );
  this.personaService.borrarPersona( id ).subscribe(
    resp => {
      console.log( resp );
    }
  )
}

}
