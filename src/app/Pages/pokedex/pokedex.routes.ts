import { Routes } from '@angular/router';
import { PokedexComponent } from './pokedex.component';
import { PokemonGalleryComponent } from './pokemon-list/pokemon-gallery.component';
import { PokedexDetailComponent } from './pokedex-detail/pokedex-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: PokedexComponent,
        children: [
            {
                path: '',
                redirectTo: 'pokemon-list',
                pathMatch: 'full'
            },
            {
                path: 'pokemon-list',
                component: PokemonGalleryComponent
            },
            {
                path: 'pokemon-details/:id', // Add this line for details route with ID parameter
                component: PokedexDetailComponent
            }
        ]
    }
];
