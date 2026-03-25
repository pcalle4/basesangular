import { Component, inject} from '@angular/core';
import { CharacterList } from '../../components/shared/character-list/character-list';
import { CharacterAdd } from "../../components/shared/character-add/character-add";
import { DragonballService } from '../../services/dragonball.service';


@Component({
    templateUrl: './dragonball-super-page.component.html',
    imports: [CharacterList, CharacterAdd]
})

export class DragonballSuperPagecomponent{

    public dragonballService = inject(DragonballService); //inyeccion

    // constructor(
    //     public dragonballService: DragonballService //inyeccion anterior
    // ){

    //     dragonballService.characters
    // }

//     characters = signal<Character[]>([
//         {id: 1, name: 'Goku', power:9001},
//         {id: 2, name: 'Vegeta', power:8000},
//     ])


//     addCharacter(character: Character) {
//         console.log(character)

//     this.characters.update(
//         (list) => [...list, character]
//     ); //... operador spread
// }

    

}