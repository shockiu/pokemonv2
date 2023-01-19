import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html'
})
export class PokemonComponent implements OnInit, OnChanges{
  @Input() pokemonInfo: any;

  ngOnInit() {

  }

  ngOnChanges() {
    console.log(this.pokemonInfo)
  }
}
