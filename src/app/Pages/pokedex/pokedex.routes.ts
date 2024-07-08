import { Routes } from '@angular/router';
import { PokedexComponent } from './pokedex.component';
import { PokemonGalleryComponent } from './pokemon-list/pokemon-gallery.component';
import { PokedexDetailComponent } from './pokedex-detail/pokedex-detail.component';
import { PokedexManageComponent } from './pokedex-manage/pokedex-manage/pokedex-manage.component';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';

export const routes: Routes = [
    {
        path: '',
        component: PokedexComponent,
        children: [
            {
                path: '',
                redirectTo: 'pokedex-list',
                pathMatch: 'full'
            },
            {
                path: 'pokedex-list',
                component: PokemonGalleryComponent
            },
            {
                path: 'pokemon-details/:id',
                component: PokedexDetailComponent
            },
            {
              path: 'pokemon-manage',
              component: PokedexManageComponent
            },
            {
                path: 'edit/:id',
                component: PokemonEditComponent
            }
        ]
    }
];
