import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './pokedex.routes';
import { PokemonGalleryComponent } from './pokemon-list/pokemon-gallery.component';
import { PokedexComponent } from './pokedex.component';
import { SharedModule } from '../../../shared/shared.module';
import { PokedexDetailComponent } from './pokedex-detail/pokedex-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokedexManageComponent } from './pokedex-manage/pokedex-manage/pokedex-manage.component';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';

@NgModule({
  declarations: [PokedexComponent, PokemonGalleryComponent, PokedexDetailComponent, PokedexManageComponent, PokemonEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [PokedexComponent]
})
export class PokedexModule { }
