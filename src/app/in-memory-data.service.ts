import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService{
  constructor() { }

  createDb() {
    const heroes = [
      { id: 11, name: 'Puzzler' },
      { id: 12, name: 'Colonel Gumm' },
      { id: 13, name: 'Mad Hatter' },
      { id: 14, name: 'False-Face' },
      { id: 15, name: 'Marsha, Queen of Diamonds' },
      { id: 16, name: 'Bookworm' },
      { id: 17, name: 'Louie the Lilac' },
      { id: 18, name: 'Archer' },
      { id: 19, name: 'Shame' },
      { id: 20, name: 'King Tut' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}