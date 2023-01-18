import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from './services/api-pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title = 'pokemonV2';
  products: any[] = [];

  constructor( private apiPokemon: ApiPokemonService ) {
  }
  ngOnInit() {
    this.getPokemons()
  }

  getPokemons() {
    this.apiPokemon.getListAllPokemon().subscribe((e) => {
      console.log(e)
    })
  }

}
