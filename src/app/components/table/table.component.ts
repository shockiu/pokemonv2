import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiPokemonService } from '../../services/api-pokemon.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements  OnInit, AfterViewInit{

  public pokemonList: any[] = [];

  constructor(
    private apiPokemon: ApiPokemonService
  ) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.getListPokemon();
  }

  getListPokemon() {
    this.apiPokemon.getListAllPokemon().subscribe((res: any) => {
      this.pokemonList = res.results.slice(0,10);
    })
  }

  idPokemon(idPokemon: number) {
    this.apiPokemon.getOnePokemon(idPokemon)
      .subscribe((pokemon) => console.log(pokemon))
  }

}
