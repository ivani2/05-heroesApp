import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../interfaces/personas.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  // private baseUrl: string = environment.baseUrl;

  constructor( private httpclient: HttpClient ) { }

  baseUrl='http://localhost:8080';

  getPersonas(): Observable<Persona[]>{
    return this.httpclient.get<Persona[]>( ` ${this.baseUrl}/personas ` );
  }

  agregarPersona( persona: Persona ): Observable<Persona>{
    return this.httpclient.post<Persona>( ` ${this.baseUrl}/personas `, persona );
  }

  actualizarPersona( persona: Persona, id: Number ): Observable<Persona>{
    return this.httpclient.post<Persona>( ` ${this.baseUrl}/personas/${ id } `, persona );
  }

  getPersonaPorId(id: Number): Observable<Persona>{
    return this.httpclient.get<Persona>( ` ${this.baseUrl}/personas/${ id } ` );
  }


  borrarPersona( id: Number ): Observable<any> {
    return this.httpclient.delete<any>( `${ this.baseUrl }/personas/${ id }`);
  }


}
