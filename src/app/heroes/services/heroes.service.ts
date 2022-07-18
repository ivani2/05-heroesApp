import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private httpClient: HttpClient ) { }

  getHeroes(): Observable<Heroe[]> {
    return this.httpClient.get<Heroe[]>('http://localhost:3000/heroes');
  }
}
