import { Component, Input } from '@angular/core';
import { Persona } from '../../interfaces/personas.interface';

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

}
