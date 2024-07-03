import { Component, input } from '@angular/core';
import { PokemonEntity } from '../../../../entities/pokemonEntity';

@Component({
  selector: 'app-pokedex-manage',
  standalone: false,
  template: `
  <table>
    <tr>
      <th>{{currentPokemon().name}}</th>
    </tr>
    <tr>
      <td>
        <img src="{{currentPokemon().detail.sprites.front_default}}" alt="Image of {{currentPokemon().name}}">
      </td>
    </tr>
    <tr>
      <td>{{currentPokemon().detail.weight}} lb</td>
      <td>{{currentPokemon().detail.height}} cm</td>
    </tr>
    <tr>
      <td *ngFor="let type of currentPokemon().detail?.types">
        {{type.type.name}}
      </td>
    </tr>
  </table>
  `,
  styleUrl: './pokedex-manage.component.scss'
})
export class PokedexManageComponent {
  // currentPokemon: PokemonEntity | undefined;
  currentPokemon = input.required<PokemonEntity>();
}
