import { Component, signal} from '@angular/core';
import { CharacterList } from '../../components/shared/character-list/character-list';
import { Character } from '../../interfaces/character.interface';
import { CharacterAdd } from "../../components/shared/character-add/character-add";


@Component({
    templateUrl: './dragonball-super-page.component.html',
    imports: [CharacterList, CharacterAdd]
})

export class DragonballSuperPagecomponent{


    name = signal('');
    power = signal(0);


    characters = signal<Character[]>([
        {id: 1, name: 'Goku', power:9001},
        {id: 2, name: 'Vegeta', power:8000},
    ])


    addCharacter(character: Character) {
        console.log(character)

    this.characters.update(
        (list) => [...list, character]
    ); //... operador spread


    this.resetFields();
}

resetFields(){
    this.name.set('');
    this.power.set(0)
}

}