import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PokemonEntity } from '../../../entities/pokemonEntity';
import { PokemonService } from '../../../../shared/services/pokemon.service';
import { Router } from '@angular/router';
import { forkJoin, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-pokemon-gallery',
  standalone: false,
  templateUrl: './pokemon-gallery.component.html',
  styleUrl: './pokemon-gallery.component.scss'
})
export class PokemonGalleryComponent implements OnInit{
  pokemonsList:PokemonEntity[] = [];
  filterValue:string ='';

  constructor(private pokeservice: PokemonService, private router: Router) {}

  ngOnInit(): void {
    // this.pokeservice.getAll().subscribe(p=> {
    //     p.results.forEach((poke:PokemonEntity) => {
    //       this.pokeservice.getPokemonDetails(poke.url).subscribe(d =>{
    //       poke.detail = d;
    //      });
    //   });
    //   this.pokemonsList = p.results;
    // });

    // forkJoin([this.pokeservice.getAll, this.pokeservice.getPokemonDetails]).pipe(
    //   mergeMap(b=> b)
    // )

    this.pokeservice.getAll().pipe(map(response=>{
      response.results.forEach((pokemon) => {
        this.pokeservice.getPokemonDetails(pokemon.url).subscribe(d => pokemon.detail = d)
      })
      return response.results;
    })).subscribe(p => this.pokemonsList = p);
  }

  redirectToDetails(pokemonId: number) {
    this.router.navigate(['pokemon-details', pokemonId]);
  }
}
