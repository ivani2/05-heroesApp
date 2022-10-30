import { Component, OnInit } from '@angular/core';

import { Persona } from '../../interfaces/personas.interface';

import { PersonaService } from '../../services/personas.service';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styles: [
  ]
})
export class ListadoPersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor( private personaService :  PersonaService ) { }

  ngOnInit(): void {

    this.personaService.getPersonas().subscribe({
      next: (personas => {
        this.personas = personas;
      }),
    })

  }

}
