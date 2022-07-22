import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;
  constructor( private httpClient: HttpClient ) { }

  getHeroes(): Observable<Heroe[]> {
    return this.httpClient.get<Heroe[]>( `${ this.baseUrl }/heroes`);
  }

  getHeroePorId( id: string ): Observable<Heroe>{
    return this.httpClient.get<Heroe>( `${ this.baseUrl }/heroes/${ id }` );
  }


}
