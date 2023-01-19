import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from '../../services/api-pokemon.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html'
})
export class StatsComponent implements OnInit{

  public alphabetArr: any = []
  public alphabet: any = {}

  constructor(
    private  apiPokemon: ApiPokemonService
  ) {
  }

  ngOnInit() {
    this.apiPokemon.emitAlphabetPokemon.subscribe((res) => {
      this.alphabetArr = Object.getOwnPropertyNames(res);
      this.alphabet = res;
    })
  }

}
