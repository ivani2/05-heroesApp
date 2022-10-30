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

}
