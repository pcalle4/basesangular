import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];

}

@Injectable({
  providedIn: 'root',
})
export class DragonballService {

      characters = signal<Character[]>(loadFromLocalStorage());
      
    saveTolocalStorage = effect(() =>{
      //console.log('prueba')
      localStorage.setItem('characters', JSON.stringify(this.characters()));
      ///localStorage.setItem('hola','hola')
    });

    addCharacter(character: Character) {
        console.log(character)

    this.characters.update(
        (list) => [...list, character]
    ); //... operador spread
  
  }
}


