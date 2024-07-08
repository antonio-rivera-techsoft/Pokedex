import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon-edit',
  standalone: false,
  templateUrl: './pokemon-edit.component.html',
  styleUrl: './pokemon-edit.component.scss'
})
export class PokemonEditComponent {
  pokemonForm :FormGroup;
  constructor(private fb: FormBuilder) {
    this.pokemonForm = new FormGroup({
      name: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required),
      weight: new FormControl('', Validators.required),
      height: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.fb.group({})
  }
  onSubmit(){
    console.log(this.pokemonForm.value);
  }

}
